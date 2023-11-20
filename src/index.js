// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const reader = async (fileName) => {
//   // write code here
// 	// dont change function name
  
// };


// module.exports =  reader ;


const fs = require("fs/promises");
const fileName = "myfile.txt";

const reader = async (filename) => {
    // Read the content of the file using fs.promises.readFile
    const content = await fs.readFile(filename, "utf-8");
    return content;
};

module.exports = reader;

