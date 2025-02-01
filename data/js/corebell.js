class CorebellEditor {
    constructor() {
        this.canvas = null;
        this.engine = null;
        this.scene = null;
        this.camera = null;
    }

    init(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error("Container not found");
            return;
        }

        this.canvas = document.createElement("canvas");
        container.appendChild(this.canvas);
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new BABYLON.Scene(this.engine);

        this.camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), this.scene);
        this.camera.attachControl(this.canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), this.scene);
        const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);

        this.createUI();
        
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener("resize", () => this.engine.resize());
    }

    createUI() {
        const gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        const addButton = BABYLON.GUI.Button.CreateSimpleButton("btn", "Add Cube");
        addButton.width = "150px";
        addButton.height = "40px";
        addButton.color = "white";
        addButton.background = "blue";
        addButton.onPointerUpObservable.add(() => {
            this.addCube();
        });
        gui.addControl(addButton);
    }

    addCube() {
        const box = BABYLON.MeshBuilder.CreateBox("box", {}, this.scene);
        box.position.y = 1;
    }
}

export default CorebellEditor;

