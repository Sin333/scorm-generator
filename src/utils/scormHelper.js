export const generateScormJson = (questions = [{ question: '', answers: [{ answer: '', isValid: false }] }]) => {
    if (!questions)
        return;

    const jsonQuestionItems = questions.map(x => {
        const result = generateNewQuestion(x);
        return result;
    });


    let jsonData = defaultScormJsonData();
    let beforeQuestions = jsonData.d.sl.g[0].S;
    let afterQuestions = jsonQuestionItems;

    jsonData.d.sl.g[0].S = afterQuestions;
    return jsonData;
}


export const generateNewQuestion = (item = { question: '', answers: [{ answer: '', isValid: false }] }) => {
    if (!item || !item.answers || !item.answers[0].answer)
        return;

    let newItem = emptyItemQuestion();
    newItem.D.a = `<p>${item.question}</p>`;
    newItem.D.h = `<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">${item.question}</span></p>`;
    newItem.D.d = item.question;

    newItem.C.chs = item.answers.map(function (x) {
        let localAnswer = emptyItemAnswer();
        localAnswer.t.h = `<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">${x.answer}</span></p>`
        localAnswer.t.a = `<p>${x.answer}</p>`;
        localAnswer.t.d = [x.answer];
        localAnswer.c = x.isValid;
        return localAnswer;
    });

    return newItem;
}

const emptyItemAnswer = () => {
    return {
        "i": "mlrockio57py-vzsbtf29g5hm",
        "t": {
            "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
            "a": "<p>4</p>",
            "r": [],
            "d": [
                "4"
            ],
            "t": {
                "tf": {
                    "f": "Open Sans",
                    "s": 16,
                    "c": 0,
                    "b": false,
                    "i": false,
                    "u": false
                },
                "pf": {
                    "t": "p",
                    "a": "left",
                    "lh": 1.5,
                    "T": 0,
                    "b": 0
                }
            }
        },
        "c": true
    }
}

const emptyItemQuestion = () => {
    return {
        "i": "qti1orm9vjty-h4wa38wui0vo",
        "tp": "MultipleChoice",
        "D": {
            "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">2 + 2 =</span></p>",
            "a": "<p>2 + 2 =</p>",
            "r": [],
            "d": [
                "2 + 2 ="
            ],
            "t": {
                "tf": {
                    "f": "Open Sans Semibold",
                    "s": 18,
                    "c": 5066061,
                    "b": false,
                    "i": false,
                    "u": false
                },
                "pf": {
                    "t": "p",
                    "a": "left",
                    "lh": 1.5,
                    "T": 0,
                    "b": 0
                }
            }
        },
        "v": true,
        "C": {
            "chs": [
                {
                    "i": "63xhedja31ah-hn83qn721skn",
                    "t": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">1</span></p>",
                        "a": "<p>1</p>",
                        "r": [],
                        "d": [
                            "1"
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    },
                    "c": false
                },
                {
                    "i": "n43cae1286am-28h3tog31erj",
                    "t": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">2</span></p>",
                        "a": "<p>2</p>",
                        "r": [],
                        "d": [
                            "2"
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    },
                    "c": false
                },
                {
                    "i": "ab85je8h0sbz-inspxqv4ysl",
                    "t": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">3</span></p>",
                        "a": "<p>3</p>",
                        "r": [],
                        "d": [
                            "3"
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    },
                    "c": false
                },
                {
                    "i": "mlrockio57py-vzsbtf29g5hm",
                    "t": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
                        "a": "<p>4</p>",
                        "r": [],
                        "d": [
                            "4"
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    },
                    "c": true
                }
            ]
        },
        "s": {
            "ee": true,
            "e": {
                "t": "byQuestion",
                "pt": 10,
                "p": 0,
                "atp": 0
            },
            "t": {
                "e": false,
                "v": 60
            },
            "sh": true,
            "a": 1,
            "cc": 1,
            "B": {
                "t": "byQuestion"
            },
            "F": {
                "c": {
                    "v": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили верно.</span></p>",
                        "a": "<p>Вы ответили верно.</p>",
                        "r": [],
                        "d": [
                            "Вы ответили верно."
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false,
                                "st": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    }
                },
                "i": {
                    "v": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили неверно.</span></p>",
                        "a": "<p>Вы ответили неверно.</p>",
                        "r": [],
                        "d": [
                            "Вы ответили неверно."
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false,
                                "st": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    }
                },
                "at": {
                    "v": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Ваш ответ не был верным. Повторите попытку.</span></p><p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Осталось попыток: %ANSWER_ATTEMPTS%.</span></p>",
                        "a": "<p>Ваш ответ не был верным. Повторите попытку.</p><p>Осталось попыток: %ANSWER_ATTEMPTS%.</p>",
                        "r": [],
                        "d": [
                            "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%."
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false,
                                "st": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    }
                },
                "a": {
                    "v": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Благодарим за ответ!</span></p>",
                        "a": "<p>Благодарим за ответ!</p>",
                        "r": [],
                        "d": [
                            "Благодарим за ответ!"
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false,
                                "st": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    }
                },
                "pc": {
                    "v": {
                        "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили не совсем верно.</span></p>",
                        "a": "<p>Вы ответили не совсем верно.</p>",
                        "r": [],
                        "d": [
                            "Вы ответили не совсем верно."
                        ],
                        "t": {
                            "tf": {
                                "f": "Open Sans",
                                "s": 16,
                                "c": 0,
                                "b": false,
                                "i": false,
                                "u": false,
                                "st": false
                            },
                            "pf": {
                                "t": "p",
                                "a": "left",
                                "lh": 1.5,
                                "T": 0,
                                "b": 0
                            }
                        }
                    }
                },
                "gt": "byQuestion",
                "st": "none"
            }
        },
        "a": {
            "l": "default",
            "L": false,
            "o": [
                {
                    "tp": "shape",
                    "I": "direction",
                    "k": false,
                    "s": "textBox",
                    "S": {
                        "b": {
                            "f": "none"
                        },
                        "s": {
                            "t": "none",
                            "s": 1,
                            "d": "",
                            "c": "butt",
                            "j": "miter"
                        },
                        "a": {
                            "t": "",
                            "a": true
                        },
                        "t": {
                            "a": "resizeShapeToFitText",
                            "v": "middle",
                            "w": true,
                            "l": 14,
                            "r": 16,
                            "t": 9,
                            "b": 12
                        }
                    },
                    "b": 0.3
                },
                {
                    "tp": "shape",
                    "I": "content",
                    "k": false,
                    "s": "rectangle",
                    "S": {
                        "b": {
                            "f": "none"
                        },
                        "s": {
                            "t": "none",
                            "s": 1,
                            "d": "",
                            "c": "butt",
                            "j": "miter"
                        },
                        "a": {
                            "t": "",
                            "a": true
                        },
                        "t": {
                            "a": "doNotAutofit",
                            "v": "middle",
                            "w": true,
                            "l": 10,
                            "r": 10,
                            "t": 5,
                            "b": 5
                        }
                    },
                    "b": 0.3
                }
            ],
            "B": [],
            "O": {
                "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
            },
            "i": {
                "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
            },
            "s": "По умолчанию"
        },
        "an": {
            "t": "none",
            "d": "fromBottom",
            "m": "byItems",
            "du": 1,
            "de": 0
        }
    }
}

const defaultScormJsonData = () => {
    return {
        "d": {
            "T": "Тест",
            "sl": {
                "r": {
                    "g": [
                        {
                            "i": "l4dcnjffg0ut-rz8j5zsqqa71",
                            "tp": "ResultSlide",
                            "D": {
                                "h": "<p style=\"text-align:center;line-height:1.35em;padding-top:0em;padding-bottom:0em;font-size:30px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:30px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">Поздравляем, вы прошли тест!</span></p>",
                                "a": "<p>Поздравляем, вы прошли тест!</p>",
                                "r": [],
                                "d": [
                                    "Поздравляем, вы прошли тест!"
                                ],
                                "t": {
                                    "tf": {
                                        "f": "Open Sans Semibold",
                                        "s": 30,
                                        "c": 5066061,
                                        "b": false,
                                        "i": false,
                                        "u": false
                                    },
                                    "pf": {
                                        "t": "p",
                                        "a": "center",
                                        "lh": 1.35,
                                        "T": 0,
                                        "b": 0
                                    }
                                }
                            },
                            "v": true,
                            "C": {
                                "Rs": {
                                    "ps": {
                                        "v": 80,
                                        "u": "percents"
                                    },
                                    "a": 1,
                                    "sc": true,
                                    "ap": true,
                                    "sg": false,
                                    "sa": true,
                                    "f": {
                                        "tp": "closeWindow",
                                        "u": "http://",
                                        "t": "_self"
                                    }
                                }
                            },
                            "s": {},
                            "a": {
                                "l": "default",
                                "L": false,
                                "o": [
                                    {
                                        "tp": "shape",
                                        "I": "direction",
                                        "k": false,
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 14,
                                                "r": 16,
                                                "t": 3,
                                                "b": 4
                                            }
                                        },
                                        "b": 0.3
                                    },
                                    {
                                        "tp": "iconPlaceholder",
                                        "I": "passed",
                                        "k": false
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "reviewBtn",
                                        "k": false,
                                        "r": {
                                            "x": 280,
                                            "y": 490,
                                            "w": 160,
                                            "h": 38
                                        },
                                        "s": "roundedRectangle",
                                        "S": {
                                            "b": {
                                                "f": "gradientFill",
                                                "g": {
                                                    "t": "linear",
                                                    "c": [
                                                        {
                                                            "p": 0,
                                                            "c": 6067175,
                                                            "a": 1
                                                        },
                                                        {
                                                            "p": 1,
                                                            "c": 4423376,
                                                            "a": 1
                                                        }
                                                    ],
                                                    "a": 90
                                                }
                                            },
                                            "s": {
                                                "t": "solid",
                                                "s": 2,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter",
                                                "C": 3568837,
                                                "a": 1
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 18,
                                                "r": 18,
                                                "t": 5,
                                                "b": 7
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:center;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:15px;font-family:fnt2_56902;color:#ffffff;font-weight:normal\"><span style=\"color:#ffffff;font-size:15px;font-family:fnt2_56902;font-weight:normal;\">ПРОСМОТРЕТЬ ТЕСТ</span></p>",
                                            "a": "<p><b>ПРОСМОТРЕТЬ ТЕСТ</b></p>",
                                            "r": [],
                                            "d": [
                                                "ПРОСМОТРЕТЬ ТЕСТ"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 15,
                                                    "c": 16777215,
                                                    "b": true
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "center",
                                                    "lh": 1.5,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "passingScoreLabel",
                                        "k": false,
                                        "r": {
                                            "x": 129.6,
                                            "y": 252,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:right;line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Проходной балл:</span></p>",
                                            "a": "<p>Проходной балл:</p>",
                                            "r": [],
                                            "d": [
                                                "Проходной балл:"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": false,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "right",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "passingScoreValue",
                                        "k": false,
                                        "r": {
                                            "x": 346.6,
                                            "y": 252,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt2_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt2_56902;font-weight:normal;font-style:normal;\">%PASSING_PERCENT%% (%PASSING_SCORE% баллов)</span></p>",
                                            "a": "<p><b>%PASSING_PERCENT%% (%PASSING_SCORE% баллов)</b></p>",
                                            "r": [],
                                            "d": [
                                                "%PASSING_PERCENT%% (%PASSING_SCORE% баллов)"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": true,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "awardedScoreLabel",
                                        "k": false,
                                        "r": {
                                            "x": 129.6,
                                            "y": 216,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:right;line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы набрали:</span></p>",
                                            "a": "<p>Вы набрали:</p>",
                                            "r": [],
                                            "d": [
                                                "Вы набрали:"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": false,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "right",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "awardedScoreValue",
                                        "k": false,
                                        "r": {
                                            "x": 346.6,
                                            "y": 216,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt2_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt2_56902;font-weight:normal;font-style:normal;\">%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)</span></p>",
                                            "a": "<p><b>%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)</b></p>",
                                            "r": [],
                                            "d": [
                                                "%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": true,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    }
                                ],
                                "B": [],
                                "O": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "i": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "s": "По умолчанию"
                            },
                            "an": {
                                "t": "none",
                                "d": "fromBottom",
                                "m": "byItems",
                                "du": 1,
                                "de": 0
                            }
                        },
                        {
                            "i": "e9mvqm2d1r1q-g9v0vheciu6q",
                            "tp": "ResultSlide",
                            "D": {
                                "h": "<p style=\"text-align:center;line-height:1.35em;padding-top:0em;padding-bottom:0em;font-size:30px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:30px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">Вы не прошли тест.</span></p>",
                                "a": "<p>Вы не прошли тест.</p>",
                                "r": [],
                                "d": [
                                    "Вы не прошли тест."
                                ],
                                "t": {
                                    "tf": {
                                        "f": "Open Sans Semibold",
                                        "s": 30,
                                        "c": 5066061,
                                        "b": false,
                                        "i": false,
                                        "u": false
                                    },
                                    "pf": {
                                        "t": "p",
                                        "a": "center",
                                        "lh": 1.35,
                                        "T": 0,
                                        "b": 0
                                    }
                                }
                            },
                            "v": true,
                            "C": {
                                "Rs": {
                                    "ps": {
                                        "v": 0,
                                        "u": "percents"
                                    },
                                    "a": 1,
                                    "sc": true,
                                    "ap": true,
                                    "sg": false,
                                    "sa": true,
                                    "f": {
                                        "tp": "closeWindow",
                                        "u": "http://",
                                        "t": "_self"
                                    }
                                }
                            },
                            "s": {},
                            "a": {
                                "l": "default",
                                "L": false,
                                "o": [
                                    {
                                        "tp": "shape",
                                        "I": "direction",
                                        "k": false,
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 14,
                                                "r": 16,
                                                "t": 3,
                                                "b": 4
                                            }
                                        },
                                        "b": 0.3
                                    },
                                    {
                                        "tp": "iconPlaceholder",
                                        "I": "failed",
                                        "k": false
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "reviewBtn",
                                        "k": false,
                                        "r": {
                                            "x": 280,
                                            "y": 490,
                                            "w": 160,
                                            "h": 38
                                        },
                                        "s": "roundedRectangle",
                                        "S": {
                                            "b": {
                                                "f": "gradientFill",
                                                "g": {
                                                    "t": "linear",
                                                    "c": [
                                                        {
                                                            "p": 0,
                                                            "c": 6067175,
                                                            "a": 1
                                                        },
                                                        {
                                                            "p": 1,
                                                            "c": 4423376,
                                                            "a": 1
                                                        }
                                                    ],
                                                    "a": 90
                                                }
                                            },
                                            "s": {
                                                "t": "solid",
                                                "s": 2,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter",
                                                "C": 3568837,
                                                "a": 1
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 18,
                                                "r": 18,
                                                "t": 5,
                                                "b": 7
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:center;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:15px;font-family:fnt2_56902;color:#ffffff;font-weight:normal\"><span style=\"color:#ffffff;font-size:15px;font-family:fnt2_56902;font-weight:normal;\">ПРОСМОТРЕТЬ ТЕСТ</span></p>",
                                            "a": "<p><b>ПРОСМОТРЕТЬ ТЕСТ</b></p>",
                                            "r": [],
                                            "d": [
                                                "ПРОСМОТРЕТЬ ТЕСТ"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 15,
                                                    "c": 16777215,
                                                    "b": true
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "center",
                                                    "lh": 1.5,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "passingScoreLabel",
                                        "k": false,
                                        "r": {
                                            "x": 129.6,
                                            "y": 252,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:right;line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Проходной балл:</span></p>",
                                            "a": "<p>Проходной балл:</p>",
                                            "r": [],
                                            "d": [
                                                "Проходной балл:"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": false,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "right",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "passingScoreValue",
                                        "k": false,
                                        "r": {
                                            "x": 346.6,
                                            "y": 252,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt2_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt2_56902;font-weight:normal;font-style:normal;\">%PASSING_PERCENT%% (%PASSING_SCORE% баллов)</span></p>",
                                            "a": "<p><b>%PASSING_PERCENT%% (%PASSING_SCORE% баллов)</b></p>",
                                            "r": [],
                                            "d": [
                                                "%PASSING_PERCENT%% (%PASSING_SCORE% баллов)"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": true,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "awardedScoreLabel",
                                        "k": false,
                                        "r": {
                                            "x": 129.6,
                                            "y": 216,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"text-align:right;line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы набрали:</span></p>",
                                            "a": "<p>Вы набрали:</p>",
                                            "r": [],
                                            "d": [
                                                "Вы набрали:"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": false,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "a": "right",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "tp": "shape",
                                        "I": "awardedScoreValue",
                                        "k": false,
                                        "r": {
                                            "x": 346.6,
                                            "y": 216,
                                            "w": 201,
                                            "h": 30
                                        },
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "shrinkTextOnOverflow",
                                                "v": "middle",
                                                "w": true,
                                                "l": 0,
                                                "r": 0,
                                                "t": 3,
                                                "b": 3
                                            }
                                        },
                                        "b": 0.3,
                                        "rt": {
                                            "h": "<p style=\"line-height:1.45em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt2_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:18px;font-family:fnt2_56902;font-weight:normal;font-style:normal;\">%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)</span></p>",
                                            "a": "<p><b>%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)</b></p>",
                                            "r": [],
                                            "d": [
                                                "%AWARDED_PERCENT%% (%AWARDED_SCORE% баллов)"
                                            ],
                                            "t": {
                                                "tf": {
                                                    "f": "Open Sans",
                                                    "s": 18,
                                                    "c": 0,
                                                    "b": true,
                                                    "i": false,
                                                    "u": false
                                                },
                                                "pf": {
                                                    "t": "p",
                                                    "lh": 1.45,
                                                    "T": 0,
                                                    "b": 0
                                                }
                                            }
                                        }
                                    }
                                ],
                                "B": [],
                                "O": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "i": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "s": "По умолчанию"
                            },
                            "an": {
                                "t": "none",
                                "d": "fromBottom",
                                "m": "byItems",
                                "du": 1,
                                "de": 0
                            }
                        }
                    ],
                    "s": [
                        {
                            "i": "1pepbez8m74c-qv6hb1ued1sr",
                            "tp": "ResultSlide",
                            "D": {
                                "h": "<p style=\"text-align:center;line-height:1.35em;padding-top:0em;padding-bottom:0em;font-size:30px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:30px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">Благодарим за участие в опросе.</span></p>",
                                "a": "<p>Благодарим за участие в опросе.</p>",
                                "r": [],
                                "d": [
                                    "Благодарим за участие в опросе."
                                ],
                                "t": {
                                    "tf": {
                                        "f": "Open Sans Semibold",
                                        "s": 30,
                                        "c": 5066061,
                                        "b": false,
                                        "i": false,
                                        "u": false
                                    },
                                    "pf": {
                                        "t": "p",
                                        "a": "center",
                                        "lh": 1.35,
                                        "T": 0,
                                        "b": 0
                                    }
                                }
                            },
                            "v": true,
                            "C": {
                                "Rs": {
                                    "ps": {
                                        "v": 80,
                                        "u": "percents"
                                    },
                                    "a": 1,
                                    "sc": true,
                                    "ap": true,
                                    "sg": false,
                                    "sa": true,
                                    "f": {
                                        "tp": "closeWindow",
                                        "u": "http://",
                                        "t": "_self"
                                    }
                                }
                            },
                            "s": {},
                            "a": {
                                "l": "default",
                                "L": false,
                                "o": [
                                    {
                                        "tp": "shape",
                                        "I": "direction",
                                        "k": false,
                                        "s": "textBox",
                                        "S": {
                                            "b": {
                                                "f": "none"
                                            },
                                            "s": {
                                                "t": "none",
                                                "s": 1,
                                                "d": "",
                                                "c": "butt",
                                                "j": "miter"
                                            },
                                            "a": {
                                                "t": "",
                                                "a": true
                                            },
                                            "t": {
                                                "a": "resizeShapeToFitText",
                                                "v": "middle",
                                                "w": true,
                                                "l": 14,
                                                "r": 16,
                                                "t": 3,
                                                "b": 4
                                            }
                                        },
                                        "b": 0.3
                                    },
                                    {
                                        "tp": "iconPlaceholder",
                                        "I": "passed",
                                        "k": false
                                    }
                                ],
                                "B": [],
                                "O": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "i": {
                                    "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                    "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                },
                                "s": "По умолчанию"
                            },
                            "an": {
                                "t": "none",
                                "d": "fromBottom",
                                "m": "byItems",
                                "du": 1,
                                "de": 0
                            }
                        }
                    ],
                    "t": "graded",
                    "f": {
                        "tp": "closeWindow",
                        "u": "http://",
                        "t": "_self"
                    }
                },
                "g": [
                    {
                        "i": "q0j6ig9lbvkx-7qbx5rvic9wq",
                        "T": "Группа вопросов 1",
                        "s": {
                            "rs": -1,
                            "st": "allQuestions",
                            "up": true,
                            "ps": {
                                "u": "percents",
                                "v": 80
                            }
                        },
                        "S": [
                            {
                                "i": "qti1orm9vjty-h4wa38wui0vo",
                                "tp": "MultipleChoice",
                                "D": {
                                    "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">2 + 2 =</span></p>",
                                    "a": "<p>2 + 2 =</p>",
                                    "r": [],
                                    "d": [
                                        "2 + 2 ="
                                    ],
                                    "t": {
                                        "tf": {
                                            "f": "Open Sans Semibold",
                                            "s": 18,
                                            "c": 5066061,
                                            "b": false,
                                            "i": false,
                                            "u": false
                                        },
                                        "pf": {
                                            "t": "p",
                                            "a": "left",
                                            "lh": 1.5,
                                            "T": 0,
                                            "b": 0
                                        }
                                    }
                                },
                                "v": true,
                                "C": {
                                    "chs": [
                                        {
                                            "i": "63xhedja31ah-hn83qn721skn",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">1</span></p>",
                                                "a": "<p>1</p>",
                                                "r": [],
                                                "d": [
                                                    "1"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "n43cae1286am-28h3tog31erj",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">2</span></p>",
                                                "a": "<p>2</p>",
                                                "r": [],
                                                "d": [
                                                    "2"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "ab85je8h0sbz-inspxqv4ysl",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">3</span></p>",
                                                "a": "<p>3</p>",
                                                "r": [],
                                                "d": [
                                                    "3"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "mlrockio57py-vzsbtf29g5hm",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
                                                "a": "<p>4</p>",
                                                "r": [],
                                                "d": [
                                                    "4"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": true
                                        }
                                    ]
                                },
                                "s": {
                                    "ee": true,
                                    "e": {
                                        "t": "byQuestion",
                                        "pt": 10,
                                        "p": 0,
                                        "atp": 0
                                    },
                                    "t": {
                                        "e": false,
                                        "v": 60
                                    },
                                    "sh": true,
                                    "a": 1,
                                    "cc": 1,
                                    "B": {
                                        "t": "byQuestion"
                                    },
                                    "F": {
                                        "c": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили верно.</span></p>",
                                                "a": "<p>Вы ответили верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "i": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили неверно.</span></p>",
                                                "a": "<p>Вы ответили неверно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили неверно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "at": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Ваш ответ не был верным. Повторите попытку.</span></p><p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Осталось попыток: %ANSWER_ATTEMPTS%.</span></p>",
                                                "a": "<p>Ваш ответ не был верным. Повторите попытку.</p><p>Осталось попыток: %ANSWER_ATTEMPTS%.</p>",
                                                "r": [],
                                                "d": [
                                                    "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "a": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Благодарим за ответ!</span></p>",
                                                "a": "<p>Благодарим за ответ!</p>",
                                                "r": [],
                                                "d": [
                                                    "Благодарим за ответ!"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "pc": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили не совсем верно.</span></p>",
                                                "a": "<p>Вы ответили не совсем верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили не совсем верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "gt": "byQuestion",
                                        "st": "none"
                                    }
                                },
                                "a": {
                                    "l": "default",
                                    "L": false,
                                    "o": [
                                        {
                                            "tp": "shape",
                                            "I": "direction",
                                            "k": false,
                                            "s": "textBox",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "resizeShapeToFitText",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 14,
                                                    "r": 16,
                                                    "t": 9,
                                                    "b": 12
                                                }
                                            },
                                            "b": 0.3
                                        },
                                        {
                                            "tp": "shape",
                                            "I": "content",
                                            "k": false,
                                            "s": "rectangle",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "doNotAutofit",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 10,
                                                    "r": 10,
                                                    "t": 5,
                                                    "b": 5
                                                }
                                            },
                                            "b": 0.3
                                        }
                                    ],
                                    "B": [],
                                    "O": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "i": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "s": "По умолчанию"
                                },
                                "an": {
                                    "t": "none",
                                    "d": "fromBottom",
                                    "m": "byItems",
                                    "du": 1,
                                    "de": 0
                                }
                            },
                            {
                                "i": "qti1orm9vjty-h4wa38wui0vo",
                                "tp": "MultipleChoice",
                                "D": {
                                    "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">2 + 2 =</span></p>",
                                    "a": "<p>2 + 2 =</p>",
                                    "r": [],
                                    "d": [
                                        "2 + 2 ="
                                    ],
                                    "t": {
                                        "tf": {
                                            "f": "Open Sans Semibold",
                                            "s": 18,
                                            "c": 5066061,
                                            "b": false,
                                            "i": false,
                                            "u": false
                                        },
                                        "pf": {
                                            "t": "p",
                                            "a": "left",
                                            "lh": 1.5,
                                            "T": 0,
                                            "b": 0
                                        }
                                    }
                                },
                                "v": true,
                                "C": {
                                    "chs": [
                                        {
                                            "i": "63xhedja31ah-hn83qn721skn",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">1</span></p>",
                                                "a": "<p>1</p>",
                                                "r": [],
                                                "d": [
                                                    "1"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "n43cae1286am-28h3tog31erj",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">2</span></p>",
                                                "a": "<p>2</p>",
                                                "r": [],
                                                "d": [
                                                    "2"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "ab85je8h0sbz-inspxqv4ysl",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">3</span></p>",
                                                "a": "<p>3</p>",
                                                "r": [],
                                                "d": [
                                                    "3"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "mlrockio57py-vzsbtf29g5hm",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
                                                "a": "<p>4</p>",
                                                "r": [],
                                                "d": [
                                                    "4"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": true
                                        }
                                    ]
                                },
                                "s": {
                                    "ee": true,
                                    "e": {
                                        "t": "byQuestion",
                                        "pt": 10,
                                        "p": 0,
                                        "atp": 0
                                    },
                                    "t": {
                                        "e": false,
                                        "v": 60
                                    },
                                    "sh": true,
                                    "a": 1,
                                    "cc": 1,
                                    "B": {
                                        "t": "byQuestion"
                                    },
                                    "F": {
                                        "c": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили верно.</span></p>",
                                                "a": "<p>Вы ответили верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "i": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили неверно.</span></p>",
                                                "a": "<p>Вы ответили неверно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили неверно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "at": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Ваш ответ не был верным. Повторите попытку.</span></p><p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Осталось попыток: %ANSWER_ATTEMPTS%.</span></p>",
                                                "a": "<p>Ваш ответ не был верным. Повторите попытку.</p><p>Осталось попыток: %ANSWER_ATTEMPTS%.</p>",
                                                "r": [],
                                                "d": [
                                                    "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "a": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Благодарим за ответ!</span></p>",
                                                "a": "<p>Благодарим за ответ!</p>",
                                                "r": [],
                                                "d": [
                                                    "Благодарим за ответ!"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "pc": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили не совсем верно.</span></p>",
                                                "a": "<p>Вы ответили не совсем верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили не совсем верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "gt": "byQuestion",
                                        "st": "none"
                                    }
                                },
                                "a": {
                                    "l": "default",
                                    "L": false,
                                    "o": [
                                        {
                                            "tp": "shape",
                                            "I": "direction",
                                            "k": false,
                                            "s": "textBox",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "resizeShapeToFitText",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 14,
                                                    "r": 16,
                                                    "t": 9,
                                                    "b": 12
                                                }
                                            },
                                            "b": 0.3
                                        },
                                        {
                                            "tp": "shape",
                                            "I": "content",
                                            "k": false,
                                            "s": "rectangle",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "doNotAutofit",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 10,
                                                    "r": 10,
                                                    "t": 5,
                                                    "b": 5
                                                }
                                            },
                                            "b": 0.3
                                        }
                                    ],
                                    "B": [],
                                    "O": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "i": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "s": "По умолчанию"
                                },
                                "an": {
                                    "t": "none",
                                    "d": "fromBottom",
                                    "m": "byItems",
                                    "du": 1,
                                    "de": 0
                                }
                            },
                            {
                                "i": "nu9p1momlrtt-rmqmib46ppjs",
                                "tp": "MultipleChoice",
                                "D": {
                                    "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">1 + 1 =</span></p>",
                                    "a": "<p>1 + 1 =</p>",
                                    "r": [],
                                    "d": [
                                        "1 + 1 ="
                                    ],
                                    "t": {
                                        "tf": {
                                            "f": "Open Sans Semibold",
                                            "s": 18,
                                            "c": 5066061,
                                            "b": false,
                                            "i": false,
                                            "u": false
                                        },
                                        "pf": {
                                            "t": "p",
                                            "a": "left",
                                            "lh": 1.5,
                                            "T": 0,
                                            "b": 0
                                        }
                                    }
                                },
                                "v": true,
                                "C": {
                                    "chs": [
                                        {
                                            "i": "l60lhs4o3uc9-dfl6sxe8w826",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">1</span></p>",
                                                "a": "<p>1</p>",
                                                "r": [],
                                                "d": [
                                                    "1"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "nu06c5mhqpkp-atyfkch9btln",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">2</span></p>",
                                                "a": "<p>2</p>",
                                                "r": [],
                                                "d": [
                                                    "2"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": true
                                        },
                                        {
                                            "i": "l4ozuqcezwiq-9st42f4x934f",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">3</span></p>",
                                                "a": "<p>3</p>",
                                                "r": [],
                                                "d": [
                                                    "3"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "8bw4pkn9rzr0-hb687b7ygjvt",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
                                                "a": "<p>4</p>",
                                                "r": [],
                                                "d": [
                                                    "4"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        }
                                    ]
                                },
                                "s": {
                                    "ee": true,
                                    "e": {
                                        "t": "byQuestion",
                                        "pt": 10,
                                        "p": 0,
                                        "atp": 0
                                    },
                                    "t": {
                                        "e": false,
                                        "v": 60
                                    },
                                    "sh": true,
                                    "a": 1,
                                    "cc": 1,
                                    "B": {
                                        "t": "byQuestion"
                                    },
                                    "F": {
                                        "c": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили верно.</span></p>",
                                                "a": "<p>Вы ответили верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "i": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили неверно.</span></p>",
                                                "a": "<p>Вы ответили неверно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили неверно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "at": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Ваш ответ не был верным. Повторите попытку.</span></p><p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Осталось попыток: %ANSWER_ATTEMPTS%.</span></p>",
                                                "a": "<p>Ваш ответ не был верным. Повторите попытку.</p><p>Осталось попыток: %ANSWER_ATTEMPTS%.</p>",
                                                "r": [],
                                                "d": [
                                                    "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "a": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Благодарим за ответ!</span></p>",
                                                "a": "<p>Благодарим за ответ!</p>",
                                                "r": [],
                                                "d": [
                                                    "Благодарим за ответ!"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "pc": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили не совсем верно.</span></p>",
                                                "a": "<p>Вы ответили не совсем верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили не совсем верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "gt": "byQuestion",
                                        "st": "none"
                                    }
                                },
                                "a": {
                                    "l": "default",
                                    "L": false,
                                    "o": [
                                        {
                                            "tp": "shape",
                                            "I": "direction",
                                            "k": false,
                                            "s": "textBox",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "resizeShapeToFitText",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 14,
                                                    "r": 16,
                                                    "t": 9,
                                                    "b": 12
                                                }
                                            },
                                            "b": 0.3
                                        },
                                        {
                                            "tp": "shape",
                                            "I": "content",
                                            "k": false,
                                            "s": "rectangle",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "doNotAutofit",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 10,
                                                    "r": 10,
                                                    "t": 5,
                                                    "b": 5
                                                }
                                            },
                                            "b": 0.3
                                        }
                                    ],
                                    "B": [],
                                    "O": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "i": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "s": "По умолчанию"
                                },
                                "an": {
                                    "t": "none",
                                    "d": "fromBottom",
                                    "m": "byItems",
                                    "du": 1,
                                    "de": 0
                                }
                            },
                            {
                                "i": "utydg0e8suwf-d3cp1kf9jsay",
                                "tp": "MultipleChoice",
                                "D": {
                                    "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:18px;font-family:fnt1_56902;color:#4d4d4d;font-weight:normal;font-style:normal\"><span style=\"color:#4d4d4d;text-decoration:none;font-size:18px;font-family:fnt1_56902;font-weight:normal;font-style:normal;\">3 + 3</span></p>",
                                    "a": "<p>3 + 3</p>",
                                    "r": [],
                                    "d": [
                                        "3 + 3"
                                    ],
                                    "t": {
                                        "tf": {
                                            "f": "Open Sans Semibold",
                                            "s": 18,
                                            "c": 5066061,
                                            "b": false,
                                            "i": false,
                                            "u": false
                                        },
                                        "pf": {
                                            "t": "p",
                                            "a": "left",
                                            "lh": 1.5,
                                            "T": 0,
                                            "b": 0
                                        }
                                    }
                                },
                                "v": true,
                                "C": {
                                    "chs": [
                                        {
                                            "i": "fevfsf7znexm-xy07gbr2l57g",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">4</span></p>",
                                                "a": "<p>4</p>",
                                                "r": [],
                                                "d": [
                                                    "4"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "rs70q6decvdy-1any3fjqewz4",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">5</span></p>",
                                                "a": "<p>5</p>",
                                                "r": [],
                                                "d": [
                                                    "5"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        },
                                        {
                                            "i": "nf7w6f8w5g7e-c19n7agooc2m",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">6</span></p>",
                                                "a": "<p>6</p>",
                                                "r": [],
                                                "d": [
                                                    "6"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": true
                                        },
                                        {
                                            "i": "a2nn0r9xng47-82f6zvjsc9ox",
                                            "t": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">7</span></p>",
                                                "a": "<p>7</p>",
                                                "r": [],
                                                "d": [
                                                    "7"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            },
                                            "c": false
                                        }
                                    ]
                                },
                                "s": {
                                    "ee": true,
                                    "e": {
                                        "t": "byQuestion",
                                        "pt": 10,
                                        "p": 0,
                                        "atp": 0
                                    },
                                    "t": {
                                        "e": false,
                                        "v": 60
                                    },
                                    "sh": true,
                                    "a": 1,
                                    "cc": 1,
                                    "B": {
                                        "t": "byQuestion"
                                    },
                                    "F": {
                                        "c": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили верно.</span></p>",
                                                "a": "<p>Вы ответили верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "i": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили неверно.</span></p>",
                                                "a": "<p>Вы ответили неверно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили неверно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "at": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Ваш ответ не был верным. Повторите попытку.</span></p><p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Осталось попыток: %ANSWER_ATTEMPTS%.</span></p>",
                                                "a": "<p>Ваш ответ не был верным. Повторите попытку.</p><p>Осталось попыток: %ANSWER_ATTEMPTS%.</p>",
                                                "r": [],
                                                "d": [
                                                    "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "a": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Благодарим за ответ!</span></p>",
                                                "a": "<p>Благодарим за ответ!</p>",
                                                "r": [],
                                                "d": [
                                                    "Благодарим за ответ!"
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "pc": {
                                            "v": {
                                                "h": "<p style=\"text-align:left;line-height:1.5em;padding-top:0em;padding-bottom:0em;font-size:16px;font-family:fnt0_56902;color:#000000;font-weight:normal;font-style:normal\"><span style=\"color:#000000;text-decoration:none;font-size:16px;font-family:fnt0_56902;font-weight:normal;font-style:normal;\">Вы ответили не совсем верно.</span></p>",
                                                "a": "<p>Вы ответили не совсем верно.</p>",
                                                "r": [],
                                                "d": [
                                                    "Вы ответили не совсем верно."
                                                ],
                                                "t": {
                                                    "tf": {
                                                        "f": "Open Sans",
                                                        "s": 16,
                                                        "c": 0,
                                                        "b": false,
                                                        "i": false,
                                                        "u": false,
                                                        "st": false
                                                    },
                                                    "pf": {
                                                        "t": "p",
                                                        "a": "left",
                                                        "lh": 1.5,
                                                        "T": 0,
                                                        "b": 0
                                                    }
                                                }
                                            }
                                        },
                                        "gt": "byQuestion",
                                        "st": "none"
                                    }
                                },
                                "a": {
                                    "l": "default",
                                    "L": false,
                                    "o": [
                                        {
                                            "tp": "shape",
                                            "I": "direction",
                                            "k": false,
                                            "s": "textBox",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "resizeShapeToFitText",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 14,
                                                    "r": 16,
                                                    "t": 9,
                                                    "b": 12
                                                }
                                            },
                                            "b": 0.3
                                        },
                                        {
                                            "tp": "shape",
                                            "I": "content",
                                            "k": false,
                                            "s": "rectangle",
                                            "S": {
                                                "b": {
                                                    "f": "none"
                                                },
                                                "s": {
                                                    "t": "none",
                                                    "s": 1,
                                                    "d": "",
                                                    "c": "butt",
                                                    "j": "miter"
                                                },
                                                "a": {
                                                    "t": "",
                                                    "a": true
                                                },
                                                "t": {
                                                    "a": "doNotAutofit",
                                                    "v": "middle",
                                                    "w": true,
                                                    "l": 10,
                                                    "r": 10,
                                                    "t": 5,
                                                    "b": 5
                                                }
                                            },
                                            "b": 0.3
                                        }
                                    ],
                                    "B": [],
                                    "O": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "i": {
                                        "o": "{\"mediaPlaceholder\":1,\"slidePicture\":1,\"slideVideo\":1,\"slideAudio\":1,\"image\":1,\"video\":1,\"iconPlaceholder\":1,\"shape\":1,\"line\":1}",
                                        "s": "{\"rectangle\":1,\"roundedRectangle\":1,\"ellipse\":1,\"textBox\":1,\"triangle\":1,\"freeform\":1}"
                                    },
                                    "s": "По умолчанию"
                                },
                                "an": {
                                    "t": "none",
                                    "d": "fromBottom",
                                    "m": "byItems",
                                    "du": 1,
                                    "de": 0
                                }
                            }
                        ]
                    }
                ]
            },
            "s": {
                "q": {
                    "st": "eachQuestion",
                    "ab": false,
                    "ap": false,
                    "co": true,
                    "nt": "free",
                    "rm": "prompt",
                    "pst": "quizPassingScore",
                    "qs": {
                        "w": 720,
                        "h": 540
                    },
                    "t": {
                        "e": false,
                        "v": 3600
                    },
                    "sp": {
                        "rs": -1,
                        "st": "selectGroups",
                        "sq": false
                    }
                },
                "d": {
                    "pt": 10,
                    "p": 0,
                    "atp": 0,
                    "a": 1,
                    "sh": true,
                    "ap": false,
                    "A": false,
                    "ssq": true,
                    "sgf": true,
                    "ssf": false,
                    "fv": {
                        "c": "Вы ответили верно.",
                        "i": "Вы ответили неверно.",
                        "at": "Ваш ответ не был верным. Повторите попытку.\nОсталось попыток: %ANSWER_ATTEMPTS%.",
                        "a": "Благодарим за ответ!",
                        "pc": "Вы ответили не совсем верно."
                    },
                    "t": {
                        "e": false,
                        "v": 60
                    }
                },
                "r": {
                    "ads": {
                        "e": false,
                        "ua": false,
                        "ca": false,
                        "f": false,
                        "x": "passedAndFailed",
                        "em": ""
                    },
                    "sts": {
                        "e": false,
                        "ua": true,
                        "ca": true,
                        "f": false,
                        "x": "passedAndFailed",
                        "em": ""
                    },
                    "rt": {
                        "f": "iSpring Solutions",
                        "sj": "[%QUIZ_STATUS%] Результаты теста: «%QUIZ_TITLE%»",
                        "c": "Здравствуйте!\n\nОзнакомьтесь с результатами теста «%QUIZ_TITLE%»."
                    },
                    "ss": {
                        "e": false,
                        "u": ""
                    },
                    "jss": {
                        "e": false,
                        "s": "",
                        "t": "_blank"
                    }
                },
                "l": {
                    "d": "z74kc579q1ms-2rkvl4ti3xwr",
                    "i": [
                        {
                            "n": "Не согласен/Согласен",
                            "id": "z74kc579q1ms-2rkvl4ti3xwr",
                            "lb": [
                                "Совершенно несогласен",
                                "Скорее несогласен",
                                "Не знаю",
                                "Скорее согласен",
                                "Полностью согласен"
                            ]
                        },
                        {
                            "n": "Трудный/Легкий",
                            "id": "ap80gzw9fuil-disf2ujm5ymc",
                            "lb": [
                                "Очень трудный",
                                "Трудный",
                                "Нейтральный",
                                "Легкий",
                                "Очень легкий"
                            ]
                        },
                        {
                            "n": "Счастлив/Несчастлив",
                            "id": "e7ntw74p66na-u1ov7z7e9o3c",
                            "lb": [
                                "Очень несчастлив",
                                "Несчастлив",
                                "Нейтрально",
                                "Счастлив",
                                "Очень счастлив"
                            ]
                        },
                        {
                            "n": "Да/Нет",
                            "id": "yfklybzac6fp-ayebgochgzob",
                            "lb": [
                                "Да",
                                "Нет"
                            ]
                        },
                        {
                            "n": "Плохо/Отлично",
                            "id": "xpx69gqy32hi-g7sl1h8rand7",
                            "lb": [
                                "Плохо",
                                "Ниже среднего",
                                "Средне",
                                "Выше среднего",
                                "Отлично"
                            ]
                        },
                        {
                            "n": "Не вероятно/вероятно",
                            "id": "1djzddwj608e-32syx5gtkd0l",
                            "lb": [
                                "Совсем не вероятно",
                                "Не очень вероятно",
                                "Возможно",
                                "Очень вероятно",
                                "Однозначно"
                            ]
                        },
                        {
                            "n": "Не удовлетворен/Удовлетворен",
                            "id": "3tubpi6gdan8-e7nq6762lvq",
                            "lb": [
                                "Очень не удовлетворен",
                                "Не удовлетворен",
                                "Нейтрально",
                                "Удовлетворен",
                                "Очень удовлетворен"
                            ]
                        }
                    ]
                }
            },
            "sk": {
                "m": {
                    "d": "Русский",
                    "m": {
                        "AUTHORIZATION_FORM_ERROR_EMAIL": "Укажите правильный адрес электронной почты",
                        "AUTHORIZATION_FORM_ERROR_FIELD_REQUIRED": "Обязательное поле",
                        "AUTHORIZATION_FORM_SEND_TO_STUDENT_EMAIL_HINT": "Результаты будут отправлены на указанный email",
                        "PB_ACCESSIBLE_SKIN_COMBOBOX_PLACEHOLDER": "- Отменить выбор -",
                        "PB_ACCESSIBLE_SKIN_CREATED_WITH": "Создано с помощью демо-версии iSpring",
                        "PB_ACCESSIBLE_SKIN_ENABLE_ACCESSIBILITY_MODE": "Перейти в режим для слабовидящих",
                        "PB_ACCESSIBLE_SKIN_ENABLE_NORMAL_MODE": "Перейти в режим полного плеера",
                        "PB_ACCESSIBLE_SKIN_QUIZ_RESULTS": "Результаты теста",
                        "PB_ACCESSIBLE_SKIN_QUIZ_REVIEW": "Просмотр ответов",
                        "PB_ACCESSIBLE_SKIN_REVIEW_CORRECT_ANSWER": "Правильный ответ:",
                        "PB_ACCESSIBLE_SKIN_REVIEW_INFOSLIDE": "Информационный слайд",
                        "PB_ACCESSIBLE_SKIN_REVIEW_NOT_ANSWERED": "Не отвечен",
                        "PB_ACCESSIBLE_SKIN_REVIEW_QUESTION": "Вопрос %QUESTION_NUMBER%",
                        "PB_ACCESSIBLE_SKIN_REVIEW_YOUR_ANSWER": "Ваш ответ:",
                        "PB_ACCESSIBLE_SKIN_TIME_TO_ANSWER": "%QUESTION_TIME% на ответ",
                        "PB_ACCESSIBLE_SKIN_TIME_TO_QUIZ": "%QUESTION_TIME% на тест",
                        "PB_ACCESSIBLE_SKIN_UNSUPPORTED_CONTENT": "Этот тип вопроса не поддерживается в данном режиме.",
                        "PB_BACK_TO_APP_BUTTON_LABEL": "Назад",
                        "PB_CHOOSE_ANSWER_LABEL": "Ответьте на вопрос, чтобы продолжить.",
                        "PB_CLEAR_HOTSPOTS_BUTTON_LABEL": "СБРОСИТЬ",
                        "PB_CONTROL_PANEL_EXIT_REVIEW_BUTTON_LABEL": "К РЕЗУЛЬТАТАМ",
                        "PB_CONTROL_PANEL_FINISH_QUIZ_BUTTON_LABEL": "ЗАКРЫТЬ",
                        "PB_CONTROL_PANEL_RETAKE_QUIZ_BUTTON_LABEL": "ПОВТОРИТЬ ТЕСТ",
                        "PB_CONTROL_PANEL_REVIEW_QUIZ_BUTTON_LABEL": "ПРОСМОТРЕТЬ ТЕСТ",
                        "PB_CONTROL_PANEL_REVIEW_SURVEY_BUTTON_LABEL": "ПРОСМОТРЕТЬ ОПРОС",
                        "PB_CUMULATIVE_SCORE_LABEL": "Набрано баллов: %USER_POINTS% из %TOTAL_POINTS%",
                        "PB_DIALOG_BOX_CANCEL_BUTTON": "ОТМЕНА",
                        "PB_DIALOG_BOX_CONTINUE_BUTTON": "ПРОДОЛЖИТЬ",
                        "PB_DIALOG_BOX_END_QUIZ_BUTTON": "ЗАВЕРШИТЬ",
                        "PB_DIALOG_BOX_NO_BUTTON": "НЕТ",
                        "PB_DIALOG_BOX_OK_BUTTON": "ОК",
                        "PB_DIALOG_BOX_RETURN_TO_QUIZ_BUTTON": "ВЕРНУТЬСЯ К ТЕСТУ",
                        "PB_DIALOG_BOX_TRY_AGAIN_BUTTON": "ЕЩЁ РАЗ",
                        "PB_DIALOG_BOX_VIEW_RESULTS_BUTTON": "СМОТРЕТЬ РЕЗУЛЬТАТЫ",
                        "PB_DIALOG_BOX_YES_BUTTON": "ДА",
                        "PB_FEEDBACK_UNLIMITED_ATTEMPTS": "Не ограничено",
                        "PB_GRADED_QUESTION_CORRECT": "Правильно",
                        "PB_GRADED_QUESTION_INCORRECT": "Неправильно",
                        "PB_GRADED_QUESTION_PARTIALLY_CORRECT": "Частично верно",
                        "PB_INVALID_BRANCHING_MESSAGE": "Невозможно перейти на следующий вопрос, потому что он не включен в тест.",
                        "PB_MINI_SKIN_ANSWER_CHOICES_DIALOG_TITLE": "Выберите ответ",
                        "PB_MINI_SKIN_DIALOG_SUBMIT_BUTTON": "ГОТОВО",
                        "PB_MINI_SKIN_NOT_ANSWERED_QUESTION": "Не отвечен",
                        "PB_MINI_SKIN_NOT_ANSWERED_SURVEY_QUESTION": "Не отвечен",
                        "PB_MINI_SKIN_QUESTION_LIST_TITLE": "Вопросы",
                        "PB_MINI_SKIN_QUIZ_REVIEW_TITLE": "Просмотр теста",
                        "PB_MINI_SKIN_TAP_TO_ANSWER_QUESTION": "Нажмите для ответа на вопрос",
                        "PB_MINI_SKIN_TYPE_CUSTOM_ANSWER": "Введите ответ",
                        "PB_MINI_SKIN_ZOOM_SCREEN_TIP": "Стягивайте и растягивайте экран двумя пальцами, чтобы изменить масштаб.",
                        "PB_NEXT_SLIDE_BUTTON_LABEL": "ДАЛЕЕ",
                        "PB_POSTPONE_BUTTON_LABEL": "ПРОПУСТИТЬ",
                        "PB_PREVIOUS_SLIDE_BUTTON_LABEL": "НАЗАД",
                        "PB_PRINT_ANSWERED_QUESTIONS": "Вопросов отвечено:",
                        "PB_PRINT_ATTEMPTS": "Попытки",
                        "PB_PRINT_AWARDED_TITLE": "Набрано",
                        "PB_PRINT_CORRECT": "Верно",
                        "PB_PRINT_CORRECT_ANSWER": "Правильный ответ",
                        "PB_PRINT_DATE_TIME_TABLE_LABEL": "Дата/Время:",
                        "PB_PRINT_DESTINATION": "Область ответа",
                        "PB_PRINT_DETAILED_REPORT_TITLE": "Подробный отчет",
                        "PB_PRINT_FAILED_QUIZ": "Не пройден",
                        "PB_PRINT_FEEDBACK": "Обратная связь",
                        "PB_PRINT_INCORRECT": "Неверно",
                        "PB_PRINT_LABEL": "ПЕЧАТЬ РЕЗУЛЬТАТОВ",
                        "PB_PRINT_PARTIALLY_CORRECT": "Частично верно",
                        "PB_PRINT_PASSED_QUIZ": "Пройден",
                        "PB_PRINT_PASSING_SCORE_LABEL": "Проходной балл:",
                        "PB_PRINT_POINTS_TITLE": "Баллы",
                        "PB_PRINT_QUESTION_TITLE": "Вопрос",
                        "PB_PRINT_RESULTS_HEADER": "Результаты теста «%QUIZ_TITLE%»",
                        "PB_PRINT_RESULT_BY_QUESTION": "Вопросы теста",
                        "PB_PRINT_RESULT_BY_SECTION": "Разделы теста",
                        "PB_PRINT_RESULT_LABEL": "Результат",
                        "PB_PRINT_RESULT_TITLE": "Результат",
                        "PB_PRINT_STUDENT_SCORE_LABEL": "Набрано баллов:",
                        "PB_PRINT_SURVEY": "Анкета",
                        "PB_PRINT_SURVEY_RESULTS_HEADER": "Результаты опроса «%QUIZ_TITLE%»",
                        "PB_PRINT_TIME_SPENT": "Затрачено времени:",
                        "PB_PRINT_USER_ANSWER": "Ответ пользователя",
                        "PB_PRINT_USER_EMAIL": "Email:",
                        "PB_PRINT_USER_ID": "ID пользователя:",
                        "PB_PRINT_YOUR_ANSWER": "Ваш ответ",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_ANSWER": "Ответ",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_ANSWER_FIELD": "Ответ:",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_ANSWER_SHEET": "Правильные ответы",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_PAGE": "Страница %N%",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_QUESTION": "Вопрос",
                        "PB_PUBLISH_INTO_WORD_CUSTOMIZATION_VERSION": "Вариант %N%",
                        "PB_QUESTION_LIST_CAPTION": "Список вопросов",
                        "PB_QUESTION_N_OF_COUNT_LABEL": "Вопрос %QUESTION_NUMBER% из %TOTAL_QUESTIONS%",
                        "PB_QUESTION_SCORE_LABEL": "Набрано: %QUESTION_POINTS%",
                        "PB_QUESTION_TIMEOUT": "Время на ответ истекло.",
                        "PB_QUIZ_TIMEOUT": "Время, отведенное на прохождение теста, истекло.",
                        "PB_RESUME_QUIZ_STATE_MESSAGE": "Продолжить тест с вопроса, на котором вы остановились?",
                        "PB_SENDING_REPORT": "Отправка результатов…",
                        "PB_SEND_REPORT_TO_EMAIL_FAILED": "Не удалось отправить результаты на email. Попробовать еще раз?",
                        "PB_SEND_REPORT_TO_URL_FAILED": "Не удалось отправить результаты на сервер. Попробовать еще раз?",
                        "PB_SLIDES_LIST_ANSWERED_COLUMN": "Отвечен",
                        "PB_SLIDES_LIST_AWARDED_SCORE_COLUMN": "Набрано",
                        "PB_SLIDES_LIST_INDEX_COLUMN": "#",
                        "PB_SLIDES_LIST_MARK_COLUMN": "Отметить вопрос",
                        "PB_SLIDES_LIST_MAX_SCORE_COLUMN": "Баллы",
                        "PB_SLIDES_LIST_STATUS_COLUMN": "Результат",
                        "PB_SLIDES_LIST_TITLE_COLUMN": "Вопрос",
                        "PB_START_QUIZ_BUTTON_LABEL": "НАЧАТЬ ТЕСТ",
                        "PB_START_SURVEY_BUTTON_LABEL": "НАЧАТЬ ОПРОС",
                        "PB_SUBMIT_ALL_BUTTON_LABEL": "ЗАВЕРШИТЬ",
                        "PB_SUBMIT_ALL_HAS_UNANSWERED_QUESTION_BY_NEXT_ALLOW_BLANK": "Вы дошли до конца теста, но остались вопросы на которые вы не ответили. Выберите действие.",
                        "PB_SUBMIT_ALL_HAS_UNANSWERED_QUESTION_BY_NEXT_NOT_ALLOW_BLANK": "Вы дошли до конца теста, но остались вопросы, на которые вы не ответили. Ответьте на них для завершения теста.",
                        "PB_SUBMIT_ALL_HAS_UNANSWERED_QUESTION_BY_SUBMIT_ALLOW_BLANK": "Остались вопросы, на которые вы не ответили. Завершить тест с незавершенными вопросами?",
                        "PB_SUBMIT_ALL_HAS_UNANSWERED_QUESTION_BY_SUBMIT_NOT_ALLOW_BLANK": "Остались вопросы, на которые вы не ответили. Ответьте на них для завершения теста.",
                        "PB_SUBMIT_ALL_NO_UNANSWERED_QUESTION_BY_NEXT": "Вы ответили на все вопросы. Завершить тест?",
                        "PB_SUBMIT_ALL_NO_UNANSWERED_QUESTION_BY_SUBMIT": "Подтвердить все ответы и завершить тест?",
                        "PB_SUBMIT_BUTTON_LABEL": "ОТВЕТИТЬ",
                        "PB_SURVEY_QUESTION_ANSWERED": "Спасибо",
                        "PB_TIMED_QUESTION_POPUP": "%QUESTION_TIME% на ответ",
                        "PB_TIMED_QUESTION_WARNING": "У вас %QUESTION_TIME% для ответа на следующий вопрос.",
                        "PB_TIMED_QUIZ_WARNING": "У вас %QUIZ_TIME% для завершения теста.",
                        "PB_TIMER_HOURS_LABEL": "ч",
                        "PB_TIMER_MINUTES_LABEL": "мин",
                        "PB_TIMER_SECONDS_LABEL": "сек",
                        "PB_VIEW_REPORT_BUTTON_LABEL": "ПОДРОБНЫЙ ОТЧЕТ",
                        "Q_CORRECT_ANSWERS_TITLE": "Правильные ответы",
                        "Q_EQUATION_REPLACEMENT_TEXT": "[уравнение]",
                        "Q_MULTIPLE_CHOICE_TEXT_QUESTION_CHOICE_PROMPT": "- Выбрать -",
                        "Q_NUMERIC_QUESTION_BETWEEN": "между %ONE% и %TWO%",
                        "Q_NUMERIC_QUESTION_DIFFERS": "не равно %ONE%",
                        "Q_NUMERIC_QUESTION_EQUALS": "равно %ONE%",
                        "Q_NUMERIC_QUESTION_GREATER_THAN": "больше чем %ONE%",
                        "Q_NUMERIC_QUESTION_GREATER_THAN_OR_EQUALS": "больше или равно %ONE%",
                        "Q_NUMERIC_QUESTION_LESS_THAN": "меньше чем %ONE%",
                        "Q_NUMERIC_QUESTION_LESS_THAN_OR_EQUALS": "меньше или равно %ONE%",
                        "Q_RESULT_SLIDE_GRADED_QUIZ_CONTENT_TITLE": "Результаты теста",
                        "Q_USER_ANSWER_TITLE": "Ваш ответ"
                    },
                    "id": true,
                    "b": "Русский"
                },
                "c": {
                    "d": "Светло-синий",
                    "c": {
                        "button.content.normal": 16777215,
                        "button.content.over": 16777215,
                        "button.normal": 5409759,
                        "button.over": 4947401,
                        "buttons.menus.highlight": 16775370,
                        "buttons.menus.highlight.second": 16774048,
                        "controls.focus": 5409759,
                        "dialogBox.button.content.normal": 16777215,
                        "dialogBox.button.content.over": 16777215,
                        "dialogBox.button.normal": 5409759,
                        "dialogBox.button.over": 4947401,
                        "feedback.title.answered": 5409759,
                        "feedback.title.correct": 8173841,
                        "feedback.title.incorrect": 14375499,
                        "feedback.title.partiallycorrect": 16292411,
                        "feedback.title.text": 16777215,
                        "hotspot.content.normal": 5409759,
                        "media.player.background": 15987699,
                        "media.player.buttons": 4737096,
                        "media.player.progress": 7368816,
                        "page.background": 13554131,
                        "player.background": 16777215,
                        "radio.check.content.normal": 5409759,
                        "radio.check.highlight": 16771154,
                        "report.progressbar.background": 5409759,
                        "slide.border": 14737632,
                        "topPanel.text": 4671562
                    },
                    "id": true,
                    "b": "Светло-синий"
                },
                "s": {
                    "n": true,
                    "p": true
                },
                "q": {
                    "s": true,
                    "d": true
                },
                "h": false
            },
            "sm": [
                {
                    "n": "По умолчанию",
                    "b": {
                        "f": "solidFill",
                        "s": {
                            "c": 16777215,
                            "a": 1
                        }
                    },
                    "q": {
                        "u": false,
                        "s": 18,
                        "c": 5066061,
                        "l": 1.5,
                        "t": 0,
                        "B": 0,
                        "f": "fnt1_56902",
                        "b": false,
                        "i": false
                    },
                    "a": {
                        "u": false,
                        "s": 16,
                        "c": 0,
                        "l": 1.5,
                        "t": 0,
                        "B": 0,
                        "f": "fnt0_56902",
                        "b": false,
                        "i": false
                    }
                }
            ]
        },
        "s": {},
        "pbs": {},
        "rs": {
            "a": {},
            "v": {},
            "i": {}
        },
        "fs": {
            "PFn": [
                "data/fonts/fnt0.woff"
            ],
            "PFnb": [
                "data/fonts/fnt2.woff"
            ],
            "PFnsb": [
                "data/fonts/fnt1.woff"
            ],
            "fnt0_56902": [
                "data/fonts/fnt0.woff"
            ],
            "fnt1_56902": [
                "data/fonts/fnt1.woff"
            ],
            "fnt2_56902": [
                "data/fonts/fnt2.woff"
            ]
        },
        "S": {
            "fnt0_56902": {
                "f": "Open Sans",
                "b": false,
                "i": false
            },
            "fnt1_56902": {
                "f": "Open Sans Semibold",
                "b": false,
                "i": false
            },
            "fnt2_56902": {
                "f": "Open Sans",
                "b": true,
                "i": false
            },
            "PFn": {
                "f": "PFn",
                "b": false,
                "i": false
            },
            "PFnb": {
                "f": "PFnb",
                "b": true,
                "i": false
            },
            "PFnsb": {
                "f": "PFnsb",
                "b": false,
                "i": false
            }
        },
        "v": {}
    };
}