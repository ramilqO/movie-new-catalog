import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { useCallback } from "react";

const Particle = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                  "zIndex": 0
                },
                "emitters": [
                  {
                    "position": {
                      "x": 0,
                      "y": 30
                    },
                    "rate": {
                      "quantity": 5,
                      "delay": 0.15
                    },
                    "particles": {
                      "move": {
                        "direction": "top-right",
                        "outModes": {
                          "top": "none",
                          "left": "none",
                          "default": "destroy"
                        }
                      }
                    }
                  },
                  {
                    "position": {
                      "x": 100,
                      "y": 30
                    },
                    "rate": {
                      "quantity": 5,
                      "delay": 0.15
                    },
                    "particles": {
                      "move": {
                        "direction": "top-left",
                        "outModes": {
                          "top": "none",
                          "right": "none",
                          "default": "destroy"
                        }
                      }
                    }
                  }
                ],
                "particles": {
                  "color": {
                    "value": [
                      "#ffffff",
                      "#FF0000"
                    ]
                  },
                  "move": {
                    "decay": 0.05,
                    "direction": "top",
                    "enable": true,
                    "gravity": {
                      "enable": true
                    },
                    "outModes": {
                      "top": "none",
                      "default": "destroy"
                    },
                    "speed": {
                      "min": 10,
                      "max": 50
                    }
                  },
                  "number": {
                    "value": 0
                  },
                  "opacity": {
                    "value": 1
                  },
                  "rotate": {
                    "value": {
                      "min": 0,
                      "max": 360
                    },
                    "direction": "random",
                    "animation": {
                      "enable": true,
                      "speed": 30
                    }
                  },
                  "tilt": {
                    "direction": "random",
                    "enable": true,
                    "value": {
                      "min": 0,
                      "max": 360
                    },
                    "animation": {
                      "enable": true,
                      "speed": 30
                    }
                  },
                  "size": {
                    "value": {
                      "min": 0,
                      "max": 2
                    },
                    "animation": {
                      "enable": true,
                      "startValue": "min",
                      "count": 1,
                      "speed": 16,
                      "sync": true
                    }
                  },
                  "roll": {
                    "darken": {
                      "enable": true,
                      "value": 25
                    },
                    "enable": true,
                    "speed": {
                      "min": 5,
                      "max": 15
                    }
                  },
                  "wobble": {
                    "distance": 30,
                    "enable": true,
                    "speed": {
                      "min": -7,
                      "max": 7
                    }
                  },
                  "shape": {
                    "type": "image",
                    "options": {
                      "image": [
                        {
                          "src": "https://particles.js.org/images/fruits/apple.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/avocado.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/banana.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/berries.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/cherry.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/grapes.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/lemon.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/orange.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/peach.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/pear.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/pepper.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/plum.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/star.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/strawberry.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/watermelon.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        },
                        {
                          "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
                          "width": 32,
                          "height": 32,
                          "particles": {
                            "size": {
                              "value": 16
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              }}
        />
    );
}

export default Particle;
