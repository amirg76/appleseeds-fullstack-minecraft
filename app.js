const mainGrid = document.querySelector(".mainGrid");
const toolPool = document.querySelectorAll(`[data-type="tool"]`);

const mineCraft = {
  blockTypesList: {
    empty: "empty",
    dirt: "dirt",
    grass: "grass",
    leaves: "leaves",
    sand: "sand",
    stone: "stone",
    wood: "wood",
  },
  toolUsage: {
    pickaxe: ["stone"],
    axe: ["wood", "leaves"],
    shovel: ["dirt", "grass", "sand"],
    sky: ["empty"],
    // inventory: ["empty"],
  },

  gameBorad: [
    // [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
    [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
    [5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 4, 4],
    [5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1],
    // ]
    // ,
    //     [
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 6, 6],
    //       [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 6, 6],
    //       [0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6],
    //       [0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 5, 0, 6, 6],
    //       [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 1, 1],
    //       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
    //       [4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
    //       [4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 4, 4],
    //       [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 5, 5, 1, 1, 1],
    //     ],
    //     [
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //       [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3],
    //       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    //     ],
  ],
  letsPlay() {
    this.draw();
    this.listenerTool();
    this.setBank(this.blockTypesList.empty);
  },
  draw() {
    for (let row = 0; row < this.gameBorad.length; row++) {
      for (let colum = 0; colum < this.gameBorad[row].length; colum++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("block");
        const attr = document.createAttribute("data-blockType");
        newDiv.setAttributeNode(attr);
        attr.value = "empty";
        mainGrid.appendChild(newDiv);

        switch (this.gameBorad[row][colum]) {
          case 0:
            attr.value = "sky";
            break;
          case 1:
            attr.value = "dirt";
            break;
          case 2:
            attr.value = "grass";
            break;
          case 3:
            attr.value = "leaves";
            break;
          case 4:
            attr.value = "sand";
            break;
          case 5:
            attr.value = "stone";
            break;
          case 6:
            attr.value = "wood";
            break;
        }

        newDiv.addEventListener("click", function () {
          console.log(newDiv);

          mineCraft.blockChoise(newDiv);
        });
      }
    }
  },
  resetTool() {
    for (let j = 0; j < toolPool.length; j++) {
      toolPool[j].setAttribute("data-active", "false");
      toolPool[j].classList.remove("active");
    }
  },
  listenerTool() {
    for (let i = 0; i < toolPool.length; i++) {
      toolPool[i].addEventListener("click", function () {
        for (let j = 0; j < toolPool.length; j++) {
          toolPool[j].setAttribute("data-active", "false");
          toolPool[j].classList.remove("active");
        }
        this.setAttribute("data-active", "true");
        this.classList.add("active");
        mineCraft.activeTool = this.getAttribute("data-tool");
        console.log(mineCraft.activeTool);
      });
    }
  },
  currentBank: {
    choiseBankStatus: document.querySelector(`[data-tool="bank"]`),
    blockTypeInBank: ["empty"],
  },
  setBank(blockType) {
    if (blockType === this.blockTypesList.empty) {
      this.currentBank.blockTypeInBank.shift();
      if (!this.currentBank.blockTypeInBank.length)
        this.currentBank.blockTypeInBank.unshift(this.blockTypesList.empty);
    } else {
      this.currentBank.blockTypeInBank.unshift(blockType);
    }
    this.currentBank.choiseBankStatus.dataset.blockType =
      this.currentBank.blockTypeInBank[0];
    this.currentBank.choiseBankStatus.setAttribute("data-blockType", blockType);
    console.log("yes");
  },
  activeTool: null,
  getActiveTool() {
    return mineCraft.activeTool;
  },
  setError(toolError) {
    toolError.classList.add("error");
    setTimeout(() => {
      toolError.classList.remove("error");
    }, 200);
  },
  blockChoise(block) {
    const getBlockAtt = block.getAttribute("data-blockType");
    if (mineCraft.activeTool) {
      if (mineCraft.toolUsage[mineCraft.activeTool].includes(getBlockAtt)) {
        mineCraft.setBank(getBlockAtt);
        block.setAttribute("data-blockType", "sky");
      } else {
        const toolError = document.querySelector(
          `[data-tool="${mineCraft.activeTool}`
        );
        console.log(toolError);
        mineCraft.setError(toolError);
      }

      // console.log(mineCraft.toolUsage["pickaxe"]);
    }
  },

  // blockChoise(block) {
  //   const currentActiveTool = mineCraft.getActiveTool();
  //   if (activeTool) {
  //     if (activeTool.toolUsage.includes(block.type)) {
  //       if (activeTool.toolType === TOOL_TYPE_ENUM.inventory) {
  //         if (block.checkPhysics(gameMatrix)) {
  //           block.type = getInventory();
  //           if (block.type === BLOCK_TYPES.sand) {
  //             droppingBlocks.push(block.dropBlock(gameMatrix));
  //           }
  //           this.setBank(this.blockTypesList.empty);
  //         }
  //       } else {
  //         setInventory(block.type);
  //         block.type = BLOCK_TYPES.empty;
  //         checkFallingBlocks(block);
  //       }
  //     } else {
  //       this.currentBank.classList.add("error");
  //       currentActiveTool.indicateError();
  //     }
  //   }
  // },

  //   generateWorld() {
  //     mainGrid.innerHTML = "";
  //     const randWorld = this.gameBorad[Math.floor(Math.random() * 3)];
  //     for (let y = 0; y < this.gameBorad.length; y++) {
  //       for (let x = 0; x < this.gameBorad[y].length; x++) {
  //         appendNewBlock(x, y, randWorld);
  //         this.gameBorad[y][x].htmlEl.addEventListener("click", (_) => {
  //           blockClick(this.gameBorad[y][x]);
  //         });
  //         worldEl.append(this.gameBorad[y][x].htmlEl);
  //       }
  //     }
  //   },
  //   /////////////
  //   appendNewBlock(x, y, worldTemplate) {
  //     const blockType = blockTypeNum[worldTemplate[y][x]];
  //     const newDiv = document.createElement("div");
  //     newDiv.classList.add("block");
  //     newDiv.setAttribute("data-blockType", blockTypeNum[worldTemplate[y][x]]);
  //     this.gameBorad[y][x] = new Block(blockType, x, y, newDiv);
  //   },
  //   ///////////////////////
}; //end of main object

mineCraft.letsPlay();
