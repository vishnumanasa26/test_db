#!/usr/bin/python

import os

import subprocess

##import socket

import json

import requests

import pprint

import datetime
import time



now=time.strftime("%c")


##print "Date:", date

##Ip= ([l for l in ([ip for ip in socket.gethostbyname_ex(socket.gethostname())[2] if not ip.startswith("127.")][:1], [[(s.connect(('8.8.8.8', 53)), s.getsockname()[0], s.close()) for s in [socket.socket(socket.AF_INET, socket.SOCK_DGRAM)]][0][1]]) if l][0][0])


##print "IP Address:", Ip

Hostname = subprocess.Popen(["hostname"], stdout=subprocess.PIPE, shell=True)
(I,err)=Hostname.communicate()
IP=I.rstrip()

print "Hostname:", I

Mem = subprocess.Popen(["free -m | grep Mem | awk '{print $4}'"], stdout=subprocess.PIPE, shell=True)
(o, err1) = Memory.communicate()
Total=o.rstrip()
Mt=int(Total)
print "Memory Total in MB:", Total

Memory = subprocess.Popen(["free -m | grep Mem | awk '{print $4}'"], stdout=subprocess.PIPE, shell=True)
(out, err1) = Memory.communicate()
Me=out.rstrip()
M=int(Me)
print "Memory Free in MB:", out

Cpu= subprocess.Popen(["top -b n 2 | grep '^%Cpu' | tail -n 1 | awk '{print $2}'"], stdout=subprocess.PIPE, shell=True)
(out1, err2) = Cpu.communicate()
c=out1.rstrip()
C1=float(c)
print "Cpu usage:", out1


Metrics= { "NAME": IP, "DATE": now, "IP_ADD":678, "LOAD":C1, "MEMORY_TOTAL":Mt, "MEMORY": M
}

Metrics_Json= json.dumps(Metrics)

headers={'content-type': 'application/json'}

Post= requests.post('http://localhost:8080/add', data=Metrics_Json, headers=headers)

print Post.text

















