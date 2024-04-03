'use strict';

const chai = require('chai');
const expect = chai.expect;

const Triangle = require('C:/VSCprojects/root/src/Triangle');



describe('Triangle', function() {
  // Testē konstruktoru
  describe('constructor', function() {
    it('visās malās tiek iestatītas uz 0, ja kāda mala nav derīga', function() {
      const triangle = new Triangle(-1, 2, 3);
      expect(triangle.x).to.equal(0);
      expect(triangle.y).to.equal(0);
      expect(triangle.z).to.equal(0);
    });

    it('jāpieņem pozitīvi skaitļi un pareizi iestatītas malas', function() {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.x).to.equal(3);
      expect(triangle.y).to.equal(4);
      expect(triangle.z).to.equal(5);
    });
  });

  // Testē updateSize
  describe('updateSize', function() {
    it('nevajadzētu atjaunināt izmērus, ja kāds update nav derīgs', function() {
      const triangle = new Triangle(3, 4, 5);
      triangle.updateSize(-1, 2, 3);
      expect(triangle.x).to.equal(3);
      expect(triangle.y).to.equal(4);
      expect(triangle.z).to.equal(5);
    });

    it('pareizi jāpalielina malu izmēri', function() {
      const triangle = new Triangle(3, 4, 5);
      triangle.updateSize(1, 1, 1);
      expect(triangle.x).to.equal(4);
      expect(triangle.y).to.equal(5);
      expect(triangle.z).to.equal(6);
    });
  });

  // Testē getPerimeter
  describe('getPerimeter', function() {
    it('jāatgriež pareizais perimetrs', function() {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getPerimeter()).to.equal(12);
    });
  });

  // Testē getLongestEdge
  describe('getLongestEdge', function() {
    it('jāatgriež garākā mala', function() {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getLongestEdge()).to.equal(5);
    });
  });

  // Testē getEdgeNameAndLength
  describe('getEdgeNameAndLength', function() {
    it('jāatgriež karte ar pareizajām atslēgām un vērtībām', function() {
      const triangle = new Triangle(3, 4, 5);
      const edgeMap = triangle.getEdgeNameAndLength();
      expect(edgeMap instanceof Map).to.be.true;
      expect(edgeMap.get('x')).to.equal(3);
      expect(edgeMap.get('y')).to.equal(4);
      expect(edgeMap.get('z')).to.equal(5);
    });
  });

  // Testē isEquilateral
  describe('isEquilateral', function() {
    it('vienādmalu trijstūrim jāatgriežas true', function() {
      const triangle = new Triangle(5, 5, 5);
      expect(triangle.isEquilateral()).to.be.true;
    });

    it('nevienādmalu trijstūrim ir jāatgriež false', function() {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.isEquilateral()).to.be.false;
    });
  });

  // Testē isIsosceles
  describe('isIsosceles', function() {
    it('vienādsānu trijstūrim jāatgriežas ar patiesību', function() {
      const triangle = new Triangle(5, 5, 3);
      expect(triangle.isIsosceles()).to.be.true;
    });

    it('vienādsānu trijstūrim jāatgriež true', function() {
      const triangle = new Triangle(5, 5, 5);
      expect(triangle.isIsosceles()).to.be.false;
    });

    it('nevienādsanu trīsstūrim ir jāatgriež false', function() {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.isIsosceles()).to.be.false;
    });
  });
});
