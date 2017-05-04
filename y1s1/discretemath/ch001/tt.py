#!/usr/bin/env python
# Create a truth table for a logical expression.
# The following are valid elements:
#   Any lower-case letter: independent variable
#   ! not
#   -> if... then
#   <-> if and only if
#   ^ and
#   | or
# Expressions are evaluated left to right.
# Parentheses are not supported.

import re
import sys

UNRECOGNIZED = 0
LETTER = 1
SYMBOL = 2

def categorize(char):
  if is_letter(char): return LETTER
  return UNRECOGNIZED

def is_letter(char):
  return re.match('[a-z]', char)

def tokenize(expression):
  ret = []
  oper_buffer = []

  any_whitespace = re.compile('\s')
  working_exp = re.sub(any_whitespace, '', expression)
  wexp_arr = list(working_exp)
  for c in wexp_arr:
    cat = categorize(c)
    if UNRECOGNIZED == cat:
      print 'Unrecognized character: ' + c
      sys.exit(-1) 

  return ret

if len(sys.argv) != 2:
  print 'USAGE: tt.py "<expression>"'
  sys.exit(-1)

ast = tokenize(sys.argv[1])
