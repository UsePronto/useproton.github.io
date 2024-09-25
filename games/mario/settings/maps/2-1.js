FullScreenMario.FullScreenMario.settings.maps.library["2-1"] = {
  name: "2-1",
  locations: [
    { entry: "Plain" },
    { xloc: 1288 },
    { entry: "PipeVertical" },
    { area: 1, entry: "Vine" },
    { area: 2 },
  ],
  areas: [
    {
      setting: "Overworld",
      blockBoundaries: true,
      creation: [
        { macro: "Floor", width: 736 },
        { macro: "CastleLarge", x: -16 },
        { macro: "Pattern", pattern: "BackFence", repeat: 2 },
        { thing: "Brick", x: 120, y: 32 },
        { thing: "Brick", x: 128, y: 32, contents: "Mushroom" },
        { thing: "Brick", x: 136, y: 32 },
        { thing: "Stone", x: 160, y: 8 },
        { thing: "Stone", x: 168, y: 16, height: 16 },
        { thing: "Stone", x: 176, y: 24, height: 24 },
        { thing: "Stone", x: 184, y: 32, height: 32 },
        { thing: "Stone", x: 192, y: 40, height: 40 },
        { thing: "Goomba", x: 192, y: 48 },
        { thing: "Block", x: 224, y: 32, hidden: true },
        {
          thing: "Block",
          x: 224,
          y: 64,
          contents: "Mushroom1Up",
          hidden: true,
        },
        { macro: "Fill", thing: "Brick", x: 232, y: 64, xnum: 3 },
        { thing: "Koopa", x: 256, y: 12 },
        { thing: "Koopa", x: 264, y: 12 },
        { thing: "Stone", x: 272, y: 32, height: 32 },
        { thing: "Stone", x: 280, y: 16, height: 16 },
        { thing: "Goomba", x: 336, y: 8 },
        { thing: "Goomba", x: 348, y: 8 },
        { macro: "Pipe", x: 368, height: 32, Piranha: "true" },
        { thing: "Block", x: 424, y: 32, contents: "Mushroom" },
        { macro: "Fill", thing: "Block", x: 424, y: 64, xnum: 5 },
        { macro: "Fill", thing: "Block", x: 432, y: 32, xnum: 4 },
        { thing: "Koopa", x: 440, y: 44 },
        { thing: "Goomba", x: 472, y: 8 },
        { thing: "Goomba", x: 484, y: 8 },
        { thing: "Koopa", x: 528, y: 12 },
        { macro: "Fill", thing: "Goomba", x: 544, y: 8, xnum: 3, xwidth: 12 },
        { thing: "Brick", x: 544, y: 32 },
        { thing: "Brick", x: 552, y: 64, contents: "Star" },
        { thing: "Brick", x: 560, y: 64, xnum: 3 },
        { macro: "Pipe", x: 592, height: 32, piranha: true },
        { macro: "Fill", thing: "Block", x: 632, y: 32, xnum: 4 },
        { macro: "Fill", thing: "Brick", x: 648, y: 64, xnum: 2 },
        { thing: "Brick", x: 664, y: 64, contents: ["Vine", { transport: 3 }] },
        { macro: "Fill", thing: "Brick", x: 672, y: 64, xnum: 2 },
        { macro: "Fill", thing: "Block", x: 680, y: 32, xnum: 3 },
        { macro: "Fill", thing: "Goomba", x: 704, y: 8, xnum: 3, xwidth: 12 },
        { macro: "Fill", thing: "Brick", x: 736, y: 64, xnum: 4 },
        { macro: "Floor", x: 768, width: 80 },
        { macro: "Pattern", pattern: "BackFenceMin", x: 768 },
        { thing: "Goomba", x: 820, y: 40 },
        { macro: "Pipe", x: 824, height: 32, piranha: true, transport: 4 },
        { macro: "Floor", x: 872, width: 240 },
        { thing: "Goomba", x: 916, y: 24 },
        { macro: "Pipe", x: 920, height: 16, piranha: true, entrance: 2 },
        { thing: "Goomba", x: 962, y: 8 },
        { macro: "Pipe", x: 976, height: 32, piranha: true },
        { thing: "Brick", x: 1000, y: 64, contents: "Mushroom" },
        { macro: "Fill", thing: "Brick", x: 1008, y: 64, xnum: 3 },
        { macro: "Pipe", x: 1008, height: 24 },
        { macro: "Pipe", x: 1040, height: 40, piranha: true },
        { macro: "Floor", x: 1136, width: 80 },
        { macro: "Pattern", pattern: "BackFence", x: 1152, repeat: 2 },
        { thing: "Koopa", x: 1200, y: 36, jumping: true },
        { macro: "Floor", x: 1232, width: 576 },
        { thing: "Stone", x: 1232, y: 24, height: 24 },
        { thing: "Brick", x: 1288, y: 32, contents: "Coin" },
        { macro: "Fill", thing: "Goomba", x: 1296, y: 8, xnum: 2, xwidth: 12 },
        { macro: "Fill", thing: "Brick", x: 1312, y: 64, xnum: 5 },
        { macro: "Fill", thing: "Koopa", x: 1352, y: 12, xnum: 2, xwidth: 16 },
        { thing: "Block", x: 1360, y: 32 },
        { thing: "Block", x: 1374, y: 64, contents: "Mushroom" },
        { macro: "Pipe", x: 1408, height: 24, piranha: true },
        { thing: "Koopa", x: 1480, y: 12 },
        { macro: "Fill", thing: "Brick", x: 1480, y: 32, xnum: 2 },
        { thing: "Block", x: 1488, y: 64, contents: "Coin", hidden: true },
        { thing: "Springboard", x: 1504, y: 14.5 },
        { macro: "Fill", thing: "Stone", x: 1520, y: 80, xnum: 2, height: 80 },
        { macro: "EndOutsideCastle", x: 1600, transport: { map: "2-2" } },
      ],
    },
    {
      setting: "Sky",
      exit: 1,
      creation: [
        { thing: "Stone", width: 32 },
        { thing: "Stone", x: 40, width: 456 },
        { macro: "Fill", thing: "Coin", x: 121, y: 55, xnum: 16, xwidth: 8 },
        { thing: "Platform", x: 128, y: 24, width: 24, transport: true },
        { macro: "Fill", thing: "Coin", x: 257, y: 71, xnum: 3, xwidth: 8 },
        { macro: "Fill", thing: "Coin", x: 289, y: 63, xnum: 16, xwidth: 8 },
        { macro: "Fill", thing: "Coin", x: 425, y: 71, xnum: 3, xwidth: 8 },
        { macro: "Fill", thing: "Coin", x: 553, y: 7, xnum: 3, xwidth: 8 },
      ],
    },
    {
      setting: "Underworld",
      blockBoundaries: true,
      creation: [
        { macro: "Ceiling", x: 32, width: 56 },
        { macro: "Floor", width: 136 },
        { macro: "Fill", thing: "Brick", y: 8, ynum: 11 },
        { macro: "Fill", thing: "Brick", x: 32, y: 8, xnum: 7, ynum: 3 },
        {
          macro: "Fill",
          thing: "Coin",
          x: 33,
          y: 31,
          xnum: 7,
          ynum: 2,
          yheight: 16,
          xwidth: 8,
        },
        { macro: "Fill", thing: "Coin", x: 41, y: 63, xnum: 5, xwidth: 8 },
        { thing: "PipeHorizontal", x: 104, y: 16, transport: 2 },
        { thing: "PipeVertical", x: 120, y: 88, height: 88 },
      ],
    },
  ],
};
