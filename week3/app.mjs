#!user/bin/env node
import {Command} from "commander";
import shutCommand from "./cli/shut.js";
import likeCommand from "./cli/like.js";
import cookCommand from "./cli/cook.js";

const program = new Command();

program
    .name("Shutter")
    .version("0.0.1")
    .description("This is just a joke")

cookCommand(program)
shutCommand(program)
likeCommand(program)

program.parse(process.argv);