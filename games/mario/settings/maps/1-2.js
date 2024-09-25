FullScreenMario.FullScreenMario.settings.maps.library["1-2"] = {
  name: "1-2",
  locations: [
    { entry: "Walking" },
    { area: 1 },
    { area: 2 },
    { area: 1, entry: "PipeVertical" },
    { area: 3, entry: "PipeVertical" },
    { area: 1 },
  ],
  areas: [
    {
      setting: "Overworld",
      blockBoundaries: true,
      creation: [
        { macro: "Pattern", pattern: "BackCloud", y: 4, repeat: 1 },
        { macro: "Floor", width: 192 },
        { macro: "CastleSmall" },
        { thing: "PipeHorizontal", x: 80, y: 16, transport: 1 },
        { macro: "Pipe", x: 96, height: 32 },
      ],
    },
    {
      setting: "Underworld",
      blockBoundaries: true,
      creation: [
        { macro: "Floor", width: 640 },
        { macro: "Fill", thing: "Brick", y: 8, ynum: 11 },
        { macro: "Ceiling", x: 48, width: 664 },
        { thing: "Block", x: 80, y: 32, contents: "Mushroom" },
        { macro: "Fill", thing: "Block", x: 88, y: 32, xnum: 4 },
        { thing: "Goomba", x: 128, y: 8 },
        { thing: "Stone", x: 136, y: 8 },
        { thing: "Goomba", x: 136, y: 16 },
        { thing: "Stone", x: 152, y: 16, height: 16 },
        { thing: "Stone", x: 168, y: 24, height: 24 },
        { thing: "Stone", x: 184, y: 32, height: 32 },
        { thing: "Stone", x: 200, y: 32, height: 32 },
        { thing: "Stone", x: 216, y: 24, height: 24 },
        { thing: "Goomba", x: 232, y: 8 },
        { thing: "Brick", x: 232, y: 40, contents: "Coin" },
        { thing: "Stone", x: 248, y: 24, height: 24 },
        { thing: "Stone", x: 264, y: 16, height: 16 },
        { macro: "Fill", thing: "Brick", x: 312, y: 32, ynum: 3 },
        { thing: "Brick", x: 320, y: 32 },
        { thing: "Coin", x: 321, y: 39 },
        { macro: "Fill", thing: "Brick", x: 328, y: 32, ynum: 3 },
        { macro: "Fill", thing: "Coin", x: 330, y: 60, xnum: 4, xwidth: 8 },
        { thing: "Brick", x: 336, y: 48 },
        { thing: "Brick", x: 344, y: 48 },
        { macro: "Fill", thing: "Koopa", x: 352, y: 12, xnum: 2, xwidth: 12 },
        { macro: "Fill", thing: "Brick", x: 352, y: 32, ynum: 3 },
        { thing: "Brick", x: 360, y: 32 },
        { thing: "Coin", x: 361, y: 39 },
        { macro: "Fill", thing: "Brick", x: 368, y: 32, ynum: 2 },
        { thing: "Brick", x: 368, y: 48, contents: "Star" },
        { macro: "Fill", thing: "Brick", x: 416, y: 32, xnum: 2, ynum: 5 },
        { macro: "Fill", thing: "Brick", x: 432, y: 16, xnum: 2, ynum: 3 },
        { macro: "Fill", thing: "Brick", x: 432, y: 72, xnum: 2, ynum: 2 },
        { macro: "Fill", thing: "Brick", x: 464, y: 32, xnum: 4, ynum: 1 },
        { macro: "Fill", thing: "Brick", x: 464, y: 72, xnum: 5, ynum: 2 },
        { macro: "Fill", thing: "Coin", x: 465, y: 39, xnum: 4, xwidth: 8 },
        { thing: "Koopa", x: 472, y: 12 },
        { macro: "Fill", thing: "Brick", x: 496, y: 32, xnum: 2, ynum: 7 },
        { thing: "Goomba", x: 494, y: 8 },
        { thing: "Goomba", x: 510, y: 8 },
        { macro: "Fill", thing: "Brick", x: 528, y: 72, xnum: 4, ynum: 2 },
        { macro: "Fill", thing: "Brick", x: 536, y: 32, ynum: 5 },
        { macro: "Fill", thing: "Brick", x: 544, y: 32, xnum: 2 },
        { thing: "Coin", x: 545, y: 39 },
        { thing: "Brick", x: 552, y: 40, contents: "Mushroom" },
        { macro: "Fill", thing: "Brick", x: 576, y: 32, xnum: 2 },
        { thing: "Brick", x: 576, y: 40 },
        { macro: "Fill", thing: "Brick", x: 576, y: 48, xnum: 2, ynum: 3 },
        { thing: "Brick", x: 584, y: 40, contents: "Coin" },
        { thing: "Goomba", x: 584, y: 72 },
        { macro: "Fill", thing: "Brick", x: 608, y: 32, xnum: 4 },
        { macro: "Fill", thing: "Goomba", x: 608, y: 40, xnum: 2, xwidth: 12 },
        { macro: "Fill", thing: "Brick", x: 608, y: 72, xnum: 4, ynum: 2 },
        { macro: "Floor", x: 664, width: 272 },
        { macro: "Fill", thing: "Brick", x: 672, y: 40, xnum: 6, ynum: 2 },
        { macro: "Fill", thing: "Coin", x: 674, y: 64, xnum: 6, xwidth: 8 },
        { thing: "Brick", x: 712, y: 88, contents: "Mushroom1Up" },
        { macro: "Ceiling", x: 720, width: 360 },
        { macro: "Fill", thing: "Goomba", x: 768, y: 8, xnum: 3, xwidth: 12 },
        { macro: "Pipe", x: 800, height: 24, piranha: true, transport: 2 },
        { macro: "Pipe", x: 848, height: 32, piranha: true },
        { thing: "Goomba", x: 872, y: 8 },
        { macro: "Pipe", x: 896, height: 16, piranha: true, entrance: 3 },
        { macro: "Floor", x: 952, width: 16 },
        { macro: "Fill", thing: "Brick", x: 952, y: 8, xnum: 2, ynum: 3 },
        { macro: "Floor", x: 984, width: 96 },
        { thing: "Stone", x: 1040, y: 8 },
        { thing: "Stone", x: 1048, y: 16, height: 16 },
        { thing: "Stone", x: 1056, y: 24, height: 24 },
        { thing: "Goomba", x: 1056, y: 32 },
        { thing: "Stone", x: 1064, y: 32, height: 32 },
        { thing: "Goomba", x: 1064, y: 48 },
        { thing: "Stone", x: 1072, y: 32, height: 32 },
        { macro: "PlatformGenerator", x: 1096, width: 24 },
        { macro: "Floor", x: 1144, width: 64 },
        { macro: "Fill", thing: "Brick", x: 1144, y: 40, xnum: 5, ynum: 1 },
        { thing: "Koopa", x: 1152, y: 12, smart: true },
        { thing: "Brick", x: 1184, y: 40, contents: "Mushroom" },
        { macro: "PlatformGenerator", x: 1224, width: 24, direction: -1 },
        { macro: "Floor", x: 1264, width: 256 },
        { macro: "Fill", thing: "Brick", x: 1264, y: 8, xnum: 17, ynum: 3 },
        { thing: "PipeHorizontal", x: 1312, y: 40, transport: 4 },
        { thing: "PipeVertical", x: 1328, y: 88, height: 64 },
        { thing: "ScrollEnabler", x: 1328, y: 120, height: 48 },
        { macro: "Ceiling", x: 1272, width: 56 },
        { macro: "Fill", thing: "Brick", x: 1344, y: 32, xnum: 7, ynum: 7 },
        { macro: "Ceiling", x: 1344, width: 136 },
        { thing: "ScrollBlocker", x: 1344 },
        { macro: "WarpWorld", x: 1400, warps: [4, 3, 2] },
        { macro: "Fill", thing: "Brick", x: 1504, y: 8, xnum: 2, ynum: 11 },
        { thing: "ScrollBlocker", x: 1518, y: 8 },
      ],
    },
    {
      setting: "Underworld",
      blockBoundaries: true,
      creation: [
        { macro: "Floor", width: 136 },
        { macro: "Fill", thing: "Brick", y: 8, ynum: 11 },
        { macro: "Fill", thing: "Brick", x: 24, y: 32, xnum: 9 },
        { macro: "Fill", thing: "Brick", x: 24, y: 64, xnum: 10, ynum: 4 },
        { macro: "Fill", thing: "Coin", x: 25, y: 7, xnum: 9, xwidth: 8 },
        { macro: "Fill", thing: "Coin", x: 33, y: 39, xnum: 8, xwidth: 8 },
        { thing: "Brick", x: 96, y: 32, contents: "Coin" },
        { macro: "Fill", thing: "Brick", x: 104, y: 24, xnum: 2, ynum: 9 },
        { thing: "PipeHorizontal", x: 104, y: 16, transport: 3 },
        { thing: "PipeVertical", x: 120, y: 100, height: 100 },
      ],
    },
    {
      setting: "Overworld",
      blockBoundaries: true,
      creation: [
        { macro: "Floor", width: 464 },
        { macro: "Pipe", height: 16, piranha: true, entrance: 4 },
        { macro: "Pattern", pattern: "BackRegular", x: 104 },
        { thing: "Stone", x: 16, y: 8 },
        { thing: "Stone", x: 24, y: 16, height: 16 },
        { thing: "Stone", x: 32, y: 24, height: 24 },
        { thing: "Stone", x: 40, y: 32, height: 32 },
        { thing: "Stone", x: 48, y: 40, height: 40 },
        { thing: "Stone", x: 56, y: 48, height: 48 },
        { thing: "Stone", x: 64, y: 56, height: 56 },
        { thing: "Stone", x: 72, y: 64, height: 64, width: 16 },
        { macro: "EndOutsideCastle", x: 152, transport: { map: "1-3" } },
      ],
    },
  ],
};
