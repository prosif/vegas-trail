const process = require('process');
const { Asset, Game, GameNode, Colors, Shapes, ShapeUtils } = require(process.env.SQUISH_PATH);

class VegasTrail extends Game {
    static metadata() {
        return {
            aspectRatio: {x: 16, y: 9},
            squishVersion: '0766',
            author: 'Joseph Garcia',
            thumbnail: 'dcd6e74ff94d51f9f323ce00669d98d4'
        };
    }

    constructor() {
        super();
        const baseColor = Colors.randomColor();
        this.base = new GameNode.Shape({
            shapeType: Shapes.POLYGON,
            coordinates2d: ShapeUtils.rectangle(0, 0, 0, 0),
            fill: [255, 255, 0, 255]
        });
    }

    handleNewPlayer() {
    }

    handlePlayerDisconnect() {
    }

    getLayers() {
        return [{root: this.base}];
    }
}

module.exports = VegasTrail;
