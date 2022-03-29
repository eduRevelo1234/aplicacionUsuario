#!/usr/bin/env python
# Copyright (c) 2020, Pycom Limited.
# This software is licensed under the GNU GPL version 3 or any
# later version, with permitted additional terms. For more information
# see the Pycom Licence v1.0 document supplied with this file, or
# available at https://www.pycom.io/opensource/licensing
def lee_entero():
    """ Solicita un valor entero y lo devuelve.
        Mientras el valor ingresado no sea entero, vuelve a solicitarlo. """
    while True:
        valor = input("Ingrese un número entero: ")
        try:
            valor = int(valor)
            return valor
        except ValueError:
            print("ATENCIÓN: Debe ingresar un número entero.")
#Importar las librerias necesarias para la aplicación
import machine
import math
import network
import os
import time
import utime
import gc
import pycom
import binascii
from machine import RTC
from machine import Pin
from machine import SD
from L76GNSS import L76GNSS
from pycoproc_2 import Pycoproc

#setup Sipy
pycom.heartbeat(False)
pycom.rgbled(0x0A0A08) # white
time.sleep(2)
gc.enable()
# setup rtc
rtc = machine.RTC()
rtc.ntp_sync("pool.ntp.org")
utime.sleep_ms(750)
#print('\nRTC Set from NTP to UTC:', rtc.now())
utime.timezone(7200)
#print('Adjusted from UTC to EST timezone', utime.localtime(), '\n')
print('!!!!!Bienvenido a la aplicación!!!!!')

while True:
    print('Ingrese el ID del diagrama')
    IdDiagrama=str(lee_entero())
    print('Ingrese la posición en X')
    PosX=str(lee_entero())
    print('Ingrese la posición en Y')
    PosY=str(lee_entero())
    temp=0
    mensaje=IdDiagrama+'/'+PosX+'/'+PosY
    print(type(mensaje))
    print(mensaje)
    from network import Sigfox
    import socket
    # init Sigfox for RCZ4 (ECUADOR)
    sigfox = Sigfox(mode=Sigfox.SIGFOX, rcz=Sigfox.RCZ4)
    # create a Sigfox socket
    s = socket.socket(socket.AF_SIGFOX, socket.SOCK_RAW)
    # make the socket blocking
    s.setblocking(True)
    # configure it as uplink only
    s.setsockopt(socket.SOL_SIGFOX, socket.SO_RX, False)
    # send some bytes
    s.send(mensaje)
    pycom.rgbled(0x101010)  # White
    print('Mensaje enviado correctamente')
    while temp<60:
        temp=temp+1
        time.sleep(1)
        print(temp)
