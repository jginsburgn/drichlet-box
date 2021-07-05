# Drichlet Box

_Context: [Pigeonhole Principle Wikipedia Article](https://en.wikipedia.org/wiki/Pigeonhole_principle)._

A function that maps the `(holesCount, pigeonsCount, pigeonIndex)` 3-tuple to the corresponding `holeIndex`, in constant time.

## Explanation

Given a wooden structure with `holesCount` pigeonholes and `pigeonsCount` pigeons, the `drichlet-box` function returns the zero-based hole index, `holeIndex`, in which a pigeon indicated by the zero-based integer `pigeonIndex` should go, so that the following holds:

1. There are at least `floor(pigeonsCount/holesCount)` pigeons in a hole (small hole).
1. There are at most `floor(pigeonsCount/holesCount)` pigeons in a hole (big hole).
1. `drichlet-box` is an [increasing function](https://mathworld.wolfram.com/IncreasingFunction.html) in regards to its `pigeonIndex` argument.
1. The big holes are the first ones. In other words, if `i` is an index of a big hole and `j` is an index of a small hole, `i < j`.