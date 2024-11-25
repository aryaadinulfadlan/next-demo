// import { TextDecoder, TextEncoder } from "util";
// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

// global.TextEncoder = require("util").TextEncoder;

import "@testing-library/jest-dom";
import { TextEncoder } from "util";

global.TextEncoder = TextEncoder;
