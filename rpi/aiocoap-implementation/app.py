#!/usr/bin/env python3
# encoding: utf-8

# This code requires: aiocoap and pycrypto
# pip3 install aiocoap pycrypto

import asyncio
import logging

from aiocoap_helper import coap_post
from constants import COAP_RECEIVER_URI, TIME_INTERVAL, LIGHT_SENSOR_INTERVAL, LIGHT_SENSOR_ITERATIONS, MAX_SEND_FAIL_COUNT, get_enc_key, get_rpi_id
from light_sensor import get_light_value
from payload_helper import build_encrypted_payload

logging.basicConfig(level=logging.INFO)
ENC_KEY = get_enc_key()
RPI_ID = get_rpi_id()

async def main():
    """
    Perform a single POST request to localhost on the default port every TIME_INTERVAL seconds.
    """

    while True:
        # Set values that we will need to use
        # sum of light values until we send the data
        light_value_sum = 0
        # set iterations until we send
        iterations_until_send = LIGHT_SENSOR_ITERATIONS

        # Keep reading light until time to send
        while iterations_until_send > 0:
            light_value_sum += get_light_value(LIGHT_SENSOR_INTERVAL)
            iterations_until_send -= 1

        # Round value to either 0 or 1 to indicate if light was off or on majority of interval
        is_occupied = round(light_value_sum / LIGHT_SENSOR_ITERATIONS)
        
        # Prepare payload
        payload = build_encrypted_payload(RPI_ID, ENC_KEY, is_occupied)
        print(payload)
        
        # Keep attempting to send payload until we manage to do so
        fail_count = 0
        while True:
            try:
                if (fail_count <= MAX_SEND_FAIL_COUNT):
                    response = await coap_post(COAP_RECEIVER_URI, payload.decode('utf-8'))
                    # Print response (for logging purposes)
                    print('Response from server: %s\n%r'%(response.code, response.payload))
                    break
                else:
                    print('Failed to send too many times, terminating...')
                    return
            except Exception as e:
                print('Exception', e)
                fail_count += 1

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())
