// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import * as faceapi from 'face-api.js'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class face_api {
  public model: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_face_api

  async loadModels(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_Yhk3pvN4qoWZxGMS(bh);
      //appendnew_next_loadModels
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dtBkzhGLnmaJr68m');
    }
  }

  async loadModel(
    net: any = undefined,
    manifestFile: any = undefined,
    modelPath: any = undefined,
    ...others
  ) {
    let bh: any = {
      input: {
        net,
        manifestFile,
        modelPath,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_DuqPr2RqIcXeUIqX(bh);
      //appendnew_next_loadModel
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MXoWm513TzgkfuIp');
    }
  }

  async readJsonFile(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_mFKWPdBjRJkTBTFy(bh);
      //appendnew_next_readJsonFile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N7VqvWzoBV97LKcb');
    }
  }

  async checkFilePath(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_oP7198DAIcpc4kO1(bh);
      //appendnew_next_checkFilePath
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4FP3m3H6n5HuSWLI');
    }
  }

  async readBinaryFile(filePath: any = undefined, ...others) {
    let bh: any = {
      input: {
        filePath,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_mXIoMH7HmD7PW2dx(bh);
      //appendnew_next_readBinaryFile
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cRufriGUbPnSazHr');
    }
  }

  async loadModelsFromGit(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_qUz7h8gG2ochcaaJ(bh);
      //appendnew_next_loadModelsFromGit
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8PDTK2Adj4lOn7U4');
    }
  }
  //appendnew_flow_face_api_start

  async sd_Yhk3pvN4qoWZxGMS(bh) {
    try {
      bh.faceapi = faceapi;
      bh = await this.sd_8hcAsBBbTuK1cDdy(bh);
      //appendnew_next_sd_Yhk3pvN4qoWZxGMS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Yhk3pvN4qoWZxGMS');
    }
  }

  async sd_8hcAsBBbTuK1cDdy(bh) {
    try {
      console.log('Cordova file system: ', cordova.file.applicationDirectory);
      return new Promise((resolve, reject) => {
        document.addEventListener('deviceready', async () => {
          try {
            const modelPath =
              cordova.file.applicationDirectory + 'www/assets/models/';
            console.log('Model path: ', modelPath);
            this.checkFilePath(
              modelPath + 'tiny_face_detector_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'face_landmark_68_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'face_recognition_model-weights_manifest.json'
            );
            this.checkFilePath(
              modelPath + 'ssd_mobilenetv1_model-weights_manifest.json'
            );

            await this.loadModel(
              faceapi.nets.tinyFaceDetector,
              modelPath,
              'tiny_face_detector_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.faceLandmark68Net,
              modelPath,
              'face_landmark_68_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.faceRecognitionNet,
              modelPath,
              'face_recognition_model-weights_manifest.json'
            );
            await this.loadModel(
              faceapi.nets.ssdMobilenetv1,
              modelPath,
              'ssd_mobilenetv1_model-weights_manifest.json'
            );

            resolve('Resolved');
          } catch (error) {
            console.error('Error loading models: ', error);
            reject(error);
          }
        });
      });
      //appendnew_next_sd_8hcAsBBbTuK1cDdy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8hcAsBBbTuK1cDdy');
    }
  }

  async sd_DuqPr2RqIcXeUIqX(bh) {
    try {
      try {
        console.log('BH in the loadModel ', bh);
        const manifest = await this.readJsonFile(
          bh.input.manifestFile + bh.input.modelPath
        );
        console.log('Loaded manifest:', manifest);
        // console.log('Loaded manifest without the wait:', this.readJsonFile(bh.input.manifestFile + bh.input.modelPath));

        const weightPaths = manifest.weights.map(
          (weight: any) => bh.input.modelPath + weight.paths[0]
        );
        console.log('Weight paths:', weightPaths);

        const weights = await Promise.all(
          weightPaths.map((weightPath: string) =>
            this.readBinaryFile(weightPath)
          )
        );
        console.log('Loaded weights:', weights);

        console.log('Net: ', bh.input.net);
        await bh.input.net.load(weights);
      } catch (error) {
        console.log('BH in the loadModel ', bh);
        console.error('Error loading model:', error);
        throw error;
      }
      //appendnew_next_sd_DuqPr2RqIcXeUIqX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DuqPr2RqIcXeUIqX');
    }
  }

  async sd_mFKWPdBjRJkTBTFy(bh) {
    try {
      return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            fileEntry.file(
              (file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                  try {
                    const json = JSON.parse(reader.result as string);
                    resolve(json);
                  } catch (err) {
                    console.error('Error parsing JSON file:', err);
                    reject({ message: 'Error parsing JSON file', error: err });
                  }
                };
                reader.onerror = (err) => {
                  console.error('Error reading JSON file:', err);
                  reject({ message: 'Error reading JSON file', error: err });
                };
                reader.readAsText(file);
              },
              (err) => {
                console.error('Error getting file:', err);
                reject({ message: 'Error getting file', error: err });
              }
            );
          },
          (err) => {
            console.error('Error resolving file system URL:', err);
            reject({ message: 'Error resolving file system URL', error: err });
          }
        );
      });
      bh = await this.sd_4UAymUxsm1TLKbL5(bh);
      //appendnew_next_sd_mFKWPdBjRJkTBTFy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mFKWPdBjRJkTBTFy');
    }
  }

  async sd_4UAymUxsm1TLKbL5(bh) {
    try {
      this.model = bh.local.result;
      //appendnew_next_sd_4UAymUxsm1TLKbL5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4UAymUxsm1TLKbL5');
    }
  }

  async sd_oP7198DAIcpc4kO1(bh) {
    try {
      return new Promise((resolve, reject) => {
        console.log(`Checking file path: ${bh.input.filePath}`);
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            console.log(`File found: ${bh.input.filePath}`);
            resolve('Resolved');
          },
          (err) => {
            console.error(`File not found: ${bh.input.filePath}`, err);
            reject(err);
          }
        );
      });
      //appendnew_next_sd_oP7198DAIcpc4kO1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oP7198DAIcpc4kO1');
    }
  }

  async sd_mXIoMH7HmD7PW2dx(bh) {
    try {
      console.log('Filepath to be resolved: ', bh.input.filePath);

      return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(
          bh.input.filePath,
          (fileEntry) => {
            fileEntry.file(
              (file) => {
                console.log('Inside the fileEntry: ', file);
                const reader = new FileReader();
                console.log('Reader: ', reader);
                reader.onloadend = () => {
                  console.log('Read binary file:', reader.result);
                  resolve(
                    new Blob([reader.result as ArrayBuffer], {
                      type: 'application/octet-stream',
                    })
                  );
                };
                reader.onerror = (error) => {
                  console.error('Error reading binary file:', error);
                  reject(error);
                };
                reader.readAsArrayBuffer(file);
              },
              (err) => {
                console.log('Did get inside the resolving of the file');
                console.error('Error resolving file system URL:', err);
                reject(err);
              }
            );
          },
          (err) => {
            console.log("Didn't even get inside the resolving of the file");
            console.error('Error resolving file system URL:', err);
            reject(err);
          }
        );
      });
      //appendnew_next_sd_mXIoMH7HmD7PW2dx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mXIoMH7HmD7PW2dx');
    }
  }

  async sd_qUz7h8gG2ochcaaJ(bh) {
    try {
      const modelBaseUrl =
        'https://raw.githubusercontent.com/Simphiwe20/models/main/';

      const loadAllModels = async () => {
        try {
          await faceapi.nets.tinyFaceDetector.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceLandmark68Net.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceRecognitionNet.loadFromUri(modelBaseUrl);
          await faceapi.nets.ssdMobilenetv1.loadFromUri(modelBaseUrl);

          console.log('All models loaded successfully');
        } catch (error) {
          console.error('Error loading models:', error);
        }
      };

      loadAllModels();

      //appendnew_next_sd_qUz7h8gG2ochcaaJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qUz7h8gG2ochcaaJ');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_face_api_Catch
}
