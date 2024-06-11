// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
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
export class api_service {
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

  //   service flows_api_service

  async getCustomers(...others) {
    let bh: any = {
      input: {},
      local: {
        customers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_fqxLeQ5rHACesUM2(bh);
      //appendnew_next_getCustomers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customers: bh.local.customers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GHNnLx5QMLnF7xNy');
    }
  }

  async getPayedBen(...others) {
    let bh: any = {
      input: {},
      local: {
        payedBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KfcYzuEVjig0V1w9(bh);
      //appendnew_next_getPayedBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedBen: bh.local.payedBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9E2STombQQOmX4D');
    }
  }

  async getPayedAirtime(...others) {
    let bh: any = {
      input: {},
      local: {
        payedAirtime: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_e9aqPsbpJ0aXFGqb(bh);
      //appendnew_next_getPayedAirtime
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedAirtime: bh.local.payedAirtime,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z3d2TsvKo6PdcZbg');
    }
  }

  async getMoneyBen(...others) {
    let bh: any = {
      input: {},
      local: {
        moneyBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KVt7NGYNwJrxTqPO(bh);
      //appendnew_next_getMoneyBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            moneyBen: bh.local.moneyBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJofPlsHqGBkJe3O');
    }
  }

  async getPayedElec(...others) {
    let bh: any = {
      input: {},
      local: {
        payedElec: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_T79IAeLu6PXxvdql(bh);
      //appendnew_next_getPayedElec
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedElec: bh.local.payedElec,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lv9c0KuuUMuUxYte');
    }
  }

  async getTransferMoney(...others) {
    let bh: any = {
      input: {},
      local: {
        transfers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_5tARe3LfURlAr4MB(bh);
      //appendnew_next_getTransferMoney
      return (
        // formatting output variables
        {
          input: {},
          local: {
            transfers: bh.local.transfers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ey0IAEmoZQEG0m2M');
    }
  }

  async getScanToPays(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_MNmXfZSoBXwLE4px(bh);
      //appendnew_next_getScanToPays
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X9Ki5udKGbeMjaKc');
    }
  }

  async backBtn(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_m4OWdOGmMIuYa2IB(bh);
      //appendnew_next_backBtn
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crCsmk2T9Wr8C9jG');
    }
  }

  async loadModels(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_lr8hJxBnmcD7CwWn(bh);
      //appendnew_next_loadModels
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qInNkHnPGTb7joQB');
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

      bh = await this.sd_QlTz1eNgwJBwXUFj(bh);
      //appendnew_next_loadModel
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tqduldU5zkPVleD9');
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

      bh = await this.sd_mNMlwgf2MzkPg11P(bh);
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
      return await this.errorHandler(bh, e, 'sd_dgtlf9eb6dN2eNhF');
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

      bh = await this.sd_FuqUw6v89JSUy4SP(bh);
      //appendnew_next_readBinaryFile
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L40I3h7kjv8HoPlB');
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

      bh = await this.sd_c8FrzjbsmBiRzwxw(bh);
      //appendnew_next_checkFilePath
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ze3ttx2Gbxy7dwFQ');
    }
  }

  async loadModelsFromGit(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_RncvRDZnDTNO0SmD(bh);
      //appendnew_next_loadModelsFromGit
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4AE7SlJOQlrYCTQR');
    }
  }
  //appendnew_flow_api_service_start

  async sd_fqxLeQ5rHACesUM2(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_K9HpgYmNHUAnzuV9(bh);
      //appendnew_next_sd_fqxLeQ5rHACesUM2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fqxLeQ5rHACesUM2');
    }
  }

  async sd_K9HpgYmNHUAnzuV9(bh) {
    try {
      bh.url = bh.ssdURL + 'get-customers';
      bh = await this.sd_bJxLJyh43MwXgsKU(bh);
      //appendnew_next_sd_K9HpgYmNHUAnzuV9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K9HpgYmNHUAnzuV9');
    }
  }

  async sd_bJxLJyh43MwXgsKU(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.customers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_bJxLJyh43MwXgsKU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJxLJyh43MwXgsKU');
    }
  }

  async sd_KfcYzuEVjig0V1w9(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_vtyH8nH6k9Oatibb(bh);
      //appendnew_next_sd_KfcYzuEVjig0V1w9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KfcYzuEVjig0V1w9');
    }
  }

  async sd_vtyH8nH6k9Oatibb(bh) {
    try {
      bh.url = bh.ssdURL + 'get-payed-ben';
      bh = await this.sd_WBaewLCC4fUpIakC(bh);
      //appendnew_next_sd_vtyH8nH6k9Oatibb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vtyH8nH6k9Oatibb');
    }
  }

  async sd_WBaewLCC4fUpIakC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.payedBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WBaewLCC4fUpIakC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WBaewLCC4fUpIakC');
    }
  }

  async sd_e9aqPsbpJ0aXFGqb(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_J0zqCHdVWB3AUklC(bh);
      //appendnew_next_sd_e9aqPsbpJ0aXFGqb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e9aqPsbpJ0aXFGqb');
    }
  }

  async sd_J0zqCHdVWB3AUklC(bh) {
    try {
      bh.url = bh.ssdURL + 'get-airtime';
      bh = await this.sd_o3DabrmHYg5twdEs(bh);
      //appendnew_next_sd_J0zqCHdVWB3AUklC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J0zqCHdVWB3AUklC');
    }
  }

  async sd_o3DabrmHYg5twdEs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.payedAirtime = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_o3DabrmHYg5twdEs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o3DabrmHYg5twdEs');
    }
  }

  async sd_KVt7NGYNwJrxTqPO(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_8dSDd6gXh4Z36fBw(bh);
      //appendnew_next_sd_KVt7NGYNwJrxTqPO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KVt7NGYNwJrxTqPO');
    }
  }

  async sd_8dSDd6gXh4Z36fBw(bh) {
    try {
      bh.url = bh.ssdURL + 'get-beneficiary-money';
      bh = await this.sd_f1N0Yoe4jsUcm9Rs(bh);
      //appendnew_next_sd_8dSDd6gXh4Z36fBw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8dSDd6gXh4Z36fBw');
    }
  }

  async sd_f1N0Yoe4jsUcm9Rs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.moneyBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_f1N0Yoe4jsUcm9Rs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f1N0Yoe4jsUcm9Rs');
    }
  }

  async sd_T79IAeLu6PXxvdql(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_wQg1DFAkEyJT5tnI(bh);
      //appendnew_next_sd_T79IAeLu6PXxvdql
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T79IAeLu6PXxvdql');
    }
  }

  async sd_wQg1DFAkEyJT5tnI(bh) {
    try {
      bh.url = bh.ssdURL + 'get-electricity';
      bh = await this.sd_wLhHq6B8nsX0Tcan(bh);
      //appendnew_next_sd_wQg1DFAkEyJT5tnI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wQg1DFAkEyJT5tnI');
    }
  }

  async sd_wLhHq6B8nsX0Tcan(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.payedElec = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_wLhHq6B8nsX0Tcan
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wLhHq6B8nsX0Tcan');
    }
  }

  async sd_5tARe3LfURlAr4MB(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_aAvFd84iLEVzEjL3(bh);
      //appendnew_next_sd_5tARe3LfURlAr4MB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5tARe3LfURlAr4MB');
    }
  }

  async sd_aAvFd84iLEVzEjL3(bh) {
    try {
      bh.url = bh.ssdURL + 'get-transfers';
      bh = await this.sd_VICE2TIOvt07QF7d(bh);
      //appendnew_next_sd_aAvFd84iLEVzEjL3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAvFd84iLEVzEjL3');
    }
  }

  async sd_VICE2TIOvt07QF7d(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.transfers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_VICE2TIOvt07QF7d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VICE2TIOvt07QF7d');
    }
  }

  async sd_MNmXfZSoBXwLE4px(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_RXKZ4PGxr9qAAEto(bh);
      //appendnew_next_sd_MNmXfZSoBXwLE4px
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNmXfZSoBXwLE4px');
    }
  }

  async sd_RXKZ4PGxr9qAAEto(bh) {
    try {
      bh.url = bh.ssdURL + 'get-scanned';
      bh = await this.sd_gYnpQ8sGpRFqdwFE(bh);
      //appendnew_next_sd_RXKZ4PGxr9qAAEto
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RXKZ4PGxr9qAAEto');
    }
  }

  async sd_gYnpQ8sGpRFqdwFE(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: { 'ngrok-skip-browser-warning': 'skip-browser-warning' },
        params: {},
        body: undefined,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_gYnpQ8sGpRFqdwFE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gYnpQ8sGpRFqdwFE');
    }
  }

  async sd_m4OWdOGmMIuYa2IB(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_lOgX1OtLdbgGEDrx(bh);
      //appendnew_next_sd_m4OWdOGmMIuYa2IB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m4OWdOGmMIuYa2IB');
    }
  }

  async sd_lOgX1OtLdbgGEDrx(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_lOgX1OtLdbgGEDrx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lOgX1OtLdbgGEDrx');
    }
  }

  async sd_lr8hJxBnmcD7CwWn(bh) {
    try {
      bh.faceapi = faceapi;
      bh = await this.sd_53jQt7d8yA7NDFjd(bh);
      //appendnew_next_sd_lr8hJxBnmcD7CwWn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lr8hJxBnmcD7CwWn');
    }
  }

  async sd_53jQt7d8yA7NDFjd(bh) {
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
      //appendnew_next_sd_53jQt7d8yA7NDFjd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_53jQt7d8yA7NDFjd');
    }
  }

  async sd_QlTz1eNgwJBwXUFj(bh) {
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
      //appendnew_next_sd_QlTz1eNgwJBwXUFj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QlTz1eNgwJBwXUFj');
    }
  }

  async sd_mNMlwgf2MzkPg11P(bh) {
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
      bh = await this.sd_Md7EMp9MSwWQs4Nq(bh);
      //appendnew_next_sd_mNMlwgf2MzkPg11P
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mNMlwgf2MzkPg11P');
    }
  }

  async sd_Md7EMp9MSwWQs4Nq(bh) {
    try {
      this.model = bh.local.result;
      //appendnew_next_sd_Md7EMp9MSwWQs4Nq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Md7EMp9MSwWQs4Nq');
    }
  }

  async sd_FuqUw6v89JSUy4SP(bh) {
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
      //appendnew_next_sd_FuqUw6v89JSUy4SP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FuqUw6v89JSUy4SP');
    }
  }

  async sd_c8FrzjbsmBiRzwxw(bh) {
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
      //appendnew_next_sd_c8FrzjbsmBiRzwxw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c8FrzjbsmBiRzwxw');
    }
  }

  async sd_RncvRDZnDTNO0SmD(bh) {
    try {
      //appendnew_next_sd_RncvRDZnDTNO0SmD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RncvRDZnDTNO0SmD');
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
  //appendnew_flow_api_service_Catch
}
