// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100001010101030101010101010101010101010201010201010201020202020202010101010102010102010101010101020101020101020101020102020202010201010101010202020201020101010102010102010101010101010201010101020101010101020202020202010101010201010201010201010101010101010101010102010102010202020202020101010101010101010101010101010101010101010202020202010101010102010202020102020202020101010101020102010101030301010101010101010201020101010101010202020202020202010201010101010102020202020202020102010201010101010101010101020201010102`, img`
. . . . . . . . . . . . . . . . 
. 2 . . 2 . . 2 . 2 2 2 2 2 2 . 
. . . . 2 . . 2 . . . . . . 2 . 
. 2 . . 2 . . 2 . 2 2 2 2 . 2 . 
. . . . 2 2 2 2 . 2 . . . . 2 . 
. 2 . . . . . . . 2 . . . . 2 . 
. . . . 2 2 2 2 2 2 . . . . 2 . 
. 2 . . 2 . . . . . . . . . . . 
. 2 . . 2 . 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 . . . . . 2 . 2 2 2 
. 2 2 2 2 2 . . . . . 2 . 2 . . 
. . . . . . . . . . . 2 . 2 . . 
. . . . 2 2 2 2 2 2 2 2 . 2 . . 
. . . . 2 2 2 2 2 2 2 2 . 2 . 2 
. . . . . . . . . . 2 2 . . . 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
