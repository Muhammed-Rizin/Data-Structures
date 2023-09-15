class TrieNode {
  constructor(){
      this.children = {}
      this.isEndOfWord = false
  }
}

class Trie {
  constructor(){
      this.root = new TrieNode()
  }

  insert(word){
      let curr = this.root
      for(let i = 0; i < word.length; i++){
          if(!curr.children[word[i]]){
              curr.children[word[i]] = new TrieNode()
          }

          curr = curr.children[word[i]]
      }

      curr.isEndOfWord = true
  }

  search(word){
      let curr = this.root
      for(let i = 0 ; i< word.length; i++){
          if(!curr.children[word[i]]){
              return false
          }

          curr = curr.children[word[i]]
      }

      return curr.isEndOfWord
  }

  startWith(word){
      let curr = this.root
      for(let i = 0 ; i< word.length; i++){
          if(!curr.children[word[i]]){
              return false
          }

          curr = curr.children[word[i]]
      }

      return true
  }


  traverse(node = this.root, prefix = '') {
      if (node.isEndOfWord) {
        console.log(prefix);
      }
  
      for (const key in node.children) {
        const childNode = node.children[key];
        const nextPrefix = prefix + key;
        this.traverse(childNode, nextPrefix);
      }
    }
}

const trie = new Trie()
trie.insert('Rizin')
trie.insert('Nav')
console.log(trie.search('Rizi'))
console.log(trie.search('Rizin'))
trie.insert('Rizin M')
trie.traverse()