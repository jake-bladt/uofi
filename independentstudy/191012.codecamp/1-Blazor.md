# CodeCamp 2019 Notes

## Session 1: Blazor

Session code is at $GITHUB/bjablonsky/NYCCC19-Blaxor

To scale beyond Blazor server capacity, consider Azure SignalR Source

Look for DotNetConf on YouTube

@brian_jablonsky - nycdotnet.devs.com

Blazor in the browser is not a transpiler. It's .net bytecode running on the mono framework on top of Web Assembly.

Requires .net core 3.0+

Use Blazor webassembly templates to create projects at dotnet command line

Blazor in the browser has a component model like Angular's.

Currently, blazor projects will support back-end or WASM, not both.

Blazor server projects will run under IIS in a standard .net core app pool. SDK includes custom development server.

Electron for desktop apps in IIS

http://aka.ms/blazorelectron
http://aka.ms/blutter
