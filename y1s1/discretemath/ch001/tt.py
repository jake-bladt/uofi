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

class Token(object):
  def __init__(self, type):
    self.type = type

class Variable(Token):
  def __init__(self, identifier):
    self.type = 'Variable'
    self.identifier = identifier

class Operator(Token):
  def __init__(self, f):
    self.type = 'Operator'
    self.operation = f

valid_oper_parts = list('!-><^|')
valid_multipart_operators = ['->', '<->']
valid_simple_operators = list('!^|')

def categorize(char):
  if is_letter(char): return LETTER
  if is_valid_symbol(char): return SYMBOL
  return UNRECOGNIZED

def is_letter(char):
  return re.match('[a-z]', char)

def is_valid_symbol(char):
  return char in valid_oper_parts

def reconcile_op_buffer(buffer):
  if 0 == len(buffer):
    return None

  sym = ''.join(buffer)
  if sym in valid_multipart_operators:

  else:
    

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
    if LETTER == cat:
      if reconcile_op_buffer(oper_buffer) is not None:


  return ret

if len(sys.argv) != 2:
  print 'USAGE: tt.py "<expression>"'
  sys.exit(-1)

ast = tokenize(sys.argv[1])
