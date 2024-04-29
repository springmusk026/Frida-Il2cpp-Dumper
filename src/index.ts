import "frida-il2cpp-bridge";
import * as fs from "fs";

Il2Cpp.perform(async () => {
    Il2Cpp.dump("dump.cs");
});
