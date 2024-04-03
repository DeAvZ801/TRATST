'use strict';


const { program } = require('commander');
const Triangle = require('./src/Triangle');

program
  .option('-x, --edgeX <type>', 'Edge x length')
  .option('-y, --edgeY <type>', 'Edge y length')
  .option('-z, --edgeZ <type>', 'Edge z length')
  .option('-a, --actions <actions>', 'Actions to perform', (value) => value.split(','));

program.parse(process.argv);

const options = program.opts();


if (options.edgeX && options.edgeY && options.edgeZ) {

  const x = Number(options.edgeX);
  const y = Number(options.edgeY);
  const z = Number(options.edgeZ);


  const triangle = new Triangle(x, y, z);


  console.log(triangle);


  if (options.actions) {
    options.actions.forEach(action => {
      switch (action) {
        case 'updateSize':

         triangle.updateSize(1, 2, 3);
          console.log(triangle);
          break;
        case 'getPerimeter':
          console.log(`Perimetrs: ${triangle.getPerimeter()}`);
          break;
        case 'getLongestEdge':
          console.log(`Garākā mala: ${triangle.getLongestEdge()}`);
          break;
        case 'getEdgeNameAndLength':
          console.log('Malu nosaukumi un garumi:', Array.from(triangle.getEdgeNameAndLength()));
          break;
        case 'isEquilateral':
          console.log(triangle.isEquilateral() ? 'Trijstūris ir vienādmalu' : 'Trijstūris nav vienādmalu');
          break;
        case 'isIsosceles':
          console.log(triangle.isIsosceles() ? 'Trijstūris ir vienādsānu' : 'Trijstūris nav vienādsānu');
          break;
        default:
          console.log(`Darbība ${action} nav definēta`);
          break;
      }
    });
  }
} else {
  console.error('Lūdzu, norādiet visus obligātos argumentus: --edgeX, --edgeY, --edgeZ');
  process.exit(1);
}
