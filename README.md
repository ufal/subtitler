# Subtitler

Subtiler is a configurable tool for displaying subtitles from a stream in a web browser.

Subtitler was first used in the paper [Continuous Rating as Reliable Human Evaluation of Simultaneous Speech Translation](https://www.statmt.org/wmt22/pdf/2022.wmt-1.9.pdf) as a tool for measuring the quality of simultaneous translation by human annotators. Later, the same evaluation platform was employed for the human evaluation of submitted systems in the simultaneous speech translation shared task in IWSLT 2022. See [Findings of the IWSLT 2022 Evaluation Campaign](https://aclanthology.org/2022.iwslt-1.10/) for more details.

## Input Format

The input format follows the format used in [online-text-flow](https://github.com/ELITR/online-text-flow/), a tool for online event streaming. The timestamps are added at the beginning of each line for both the text and json format.

### Text Example

```
2666.4156913757324 100 101 Kde...? Kde?
2817.3038959503174 100 101 Kde se to...
3230.269432067871 100 101 Odkud se vzalo to, co říkáme...
3361.194372177124 100 101 Odkud bychom řekli "pane..."
```

### JSON Example

```json
0.0 {"complete": [], "expected": [], "incoming": []}
4610.817432403564 {"complete": [], "expected": [], "incoming": [[100, 101, "Jak to, \u017ee..."]]}
7460.149526596069 {"complete": [], "expected": [], "incoming": [[100, 101, "Odkud se to vzalo?"]]}
10410.338640213013 {"complete": [], "expected": [], "incoming": [[100, 101, "Odkud se to vzalo, \u0159ekn\u011bme, \u017ee to je..."]]}
```

## Demo

A demo is available in the `demo` directory. Two input files are provided: `sample.txt` and `sample.json`. The subtitles were automatically translated and generated from the input sound of [this video](https://www.youtube.com/watch?v=vuoIs5_J0rw).

To start a presentation, upload a corresponding input file on the demo webpage in the browser.

### Configuration

To modify the appearance or behaviour properties of Subtitler, click on the subtitling window.

## CREDITS

If you use Subtitler, please cite the following:

```
@InProceedings{javorsk-machek-bojar:2022:WMT,
  author    = {Javorský, Dávid  and  Macháček, Dominik  and  Bojar, Ondřej},
  title     = {{Continuous Rating as Reliable Human Evaluation of Simultaneous Speech Translation}},
  booktitle      = {Proceedings of the Seventh Conference on Machine Translation},
  month          = {December},
  year           = {2022},
  address        = {Abu Dhabi},
  publisher      = {Association for Computational Linguistics},
  pages     = {154--164},
  url       = {https://aclanthology.org/2022.wmt-1.9}
}
```