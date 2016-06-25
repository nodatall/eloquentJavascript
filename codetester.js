//Page 39 - findSequence function

//Modified function that provides a call trace on the program. Looking at each step visually helps in understanding how it works.
function findSequence (goal) {
  function find (start, history, depth) {
    depth = depth || 0;
    console.log( Array( ++depth ).join('--> '), start, goal, history );
    if (start == goal) {
      console.warn( 'history' );
      return history;
    } else if (start > goal) {
      console.error( 'null' );
      return null;
    } else {
      console.info('recursion!');
      return find(start + 5, "(" + history + " + 5)", depth) ||
             find(start * 3, "(" + history + " * 3)", depth);
    }
  }
  return find(1, "1");
}

//console.info( findSequence(24) );
