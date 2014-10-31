var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    trie =  require('../trie'),
    trieSearch = trie.search;

describe('#search',function(){

  trie.build(["apple","orange","yellow","black"]);

  it('searched for word "app"', function(){
    trieSearch("app")[0].should.equal("apple");
  });

  it('searched for word "yel"', function(){
    trieSearch("yel")[0].should.equal("yellow");
  });

  it('searched for word "pine"', function(){
    expect(trieSearch("pine")).to.be.empty;
  });

});
