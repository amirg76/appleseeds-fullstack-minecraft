const mainGrid = document.querySelector(".mainGrid");
const toolPool = document.querySelectorAll(`[data-type="tool"]`);
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector(".reset");
console.log(resetBtn);

const mineCraft = {
  gameBorad: [
    [
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
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 0, 6, 6],
      [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 6, 6],
      [0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6],
      [0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 5, 0, 6, 6],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
      [4, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
      [4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 4, 4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 5, 5, 1, 1, 1],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 3, 3, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
      [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 6, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 6, 0],
      [0, 0, 0, 0, 6, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 6, 0],
      [1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2],
      [1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  ],
  activeTool: null,

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
  },
  // RESET TOOLS FUNCTION//
  resetTool() {
    for (let j = 0; j < toolPool.length; j++) {
      toolPool[j].setAttribute("data-active", "false");
      toolPool[j].classList.remove("active");
    }
  },
  //END RESET TOOLS FUNCTION //

  // STATUS OF THE BANK //
  currentBank: {
    choiseBankStatus: document.querySelector(`[data-tool="bank"]`),
    blockTypeInBank: ["empty"],
  },
  // GET THE ACTIVE TOOL
  getActiveTool() {
    return mineCraft.activeTool;
  },
  // SET ERROR TO THE TOOL IF WORNG TYPE OF ACTIVATE //
  setError(toolError) {
    toolError.classList.add("error");
    setTimeout(() => {
      toolError.classList.remove("error");
    }, 200);
  },
  // END SET ERROR TO THE TOOL IF WORNG TYPE OF ACTIVATE //

  // MAIN FUNCTION//
  letsPlay() {
    this.draw();
    this.listenerTool();
    this.setBank(this.blockTypesList.empty);
  },

  // DRAW FIRST TIME GAME BOARD//
  draw() {
    const randBoard = Math.floor(Math.random() * 3);

    for (let row = 0; row < this.gameBorad[randBoard].length; row++) {
      for (
        let colum = 0;
        colum < this.gameBorad[randBoard][row].length;
        colum++
      ) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("block");
        const attr = document.createAttribute("data-blockType");
        newDiv.setAttributeNode(attr);
        attr.value = "empty";
        mainGrid.appendChild(newDiv);

        // FILL EVERY NEW DIV WITH HIS BLOCK TYPE
        switch (this.gameBorad[randBoard][row][colum]) {
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
        // WAITING FOR CLICK ON THE DIV IN GAME BOARD
        newDiv.addEventListener("click", function () {
          mineCraft.blockChoise(newDiv);
        });
      }
    }
  },
  // END OF DRAW FUNCTION//

  // LISTEN TO CLICK ON TOOL SIDE BAR//
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
      });
    }
  },
  //END LISTEN TO CLICK ON TOOL SIDE BAR//

  // CHANGING STATUS IN THE BANK //
  setBank(blockType) {
    const currentBankStatus = this.currentBank.choiseBankStatus;
    const blockTypeInBank = this.currentBank.blockTypeInBank;

    if (blockType === this.blockTypesList.empty) {
      currentBankStatus.setAttribute("data-active", "false");
      blockTypeInBank.shift();
      if (!blockTypeInBank.length)
        blockTypeInBank.unshift(this.blockTypesList.empty);
    } else {
      blockTypeInBank.unshift(blockType);
    }

    currentBankStatus.setAttribute("data-blockType", blockType);

    // listen if choise the bank
    currentBankStatus.addEventListener("click", function () {
      const currentBank = mineCraft.currentBank.blockTypeInBank[0];
      const bankStatus = mineCraft.currentBank.choiseBankStatus;
      if (bankStatus.getAttribute("data-active") === "true") {
      } else if (
        bankStatus.getAttribute("data-active") === "false" &&
        bankStatus.getAttribute("data-blockType") !== "empty"
      ) {
        bankStatus.setAttribute("data-active", "true");

        //disable active tool
        mineCraft.activeTool = null;
        for (let j = 0; j < toolPool.length; j++) {
          if (toolPool[j].getAttribute("data-active") === "true") {
            toolPool[j].setAttribute("data-active", "false");
            toolPool[j].classList.remove("active");
          }
        }
      }
    });
  },
  //END CHANGING STATUS IN THE BANK //

  // BEHAIVE OF CHOISE DIV//
  blockChoise(block) {
    const getBlockAttType = block.getAttribute("data-blockType");
    const bankStatus = mineCraft.currentBank.choiseBankStatus;
    //check if tool was choise and noting in bank
    if (
      mineCraft.activeTool &&
      bankStatus.getAttribute("data-active") === "false"
    ) {
      //check if tool is work for kind of blocktype
      if (mineCraft.toolUsage[mineCraft.activeTool].includes(getBlockAttType)) {
        mineCraft.setBank(getBlockAttType);
        block.setAttribute("data-blockType", "sky");
      }
      // trow error on tool if no tool choise
      else {
        const toolError = document.querySelector(
          `[data-tool="${mineCraft.activeTool}`
        );
        mineCraft.setError(toolError);
      }
    } else if (
      bankStatus.getAttribute("data-active") === "true" &&
      getBlockAttType === "sky"
    ) {
      // fill div with img from bank
      const bankImg = mineCraft.currentBank.blockTypeInBank[0];
      block.setAttribute("data-blockType", bankImg);
      // change status of bank to empty
      bankStatus.setAttribute("data-active", "false");
      mineCraft.setBank("empty");
    }
  },
  //END BEHAIVE OF CHOISE DIV//

  // START BUTTON WELCOME//

  startBtnClick(e) {
    const titleScreenEl = document.querySelector("#titleScreen");
    titleScreenEl.classList.add("hidden");
    setTimeout(() => {
      titleScreenEl.style.display = "none";
    }, 800);
    mineCraft.letsPlay();
  },

  // RESTART GAME
  reloadGame() {
    location.reload();
  },
}; // END OF MAIN OBJECT

startBtn.addEventListener("click", mineCraft.startBtnClick);
resetBtn.addEventListener("click", mineCraft.reloadGame);
