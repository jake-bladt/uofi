#!/usr/bin/env python
import re
import sys

def tokenize(expression):
  ret = []
  any_whitespace = re.compile('\s')
  working_exp = re.sub(any_whitespace, '', expression)
  wexp_arr = list(working_exp)
  print len(wexp_arr)

  return ret

if len(sys.argv) != 2:
  print 'USAGE: tt.py "<expression>"'
  sys.exit(-1)

ast = tokenize(sys.argv[1])
