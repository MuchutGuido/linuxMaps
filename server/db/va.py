#!/usr/bin/env python
import sys
import os

pepe='awk \'END {print NR}\' ' + "escuelas.csv > index.html"
ve=os.system(pepe)

print(ve)
input("no anda")
