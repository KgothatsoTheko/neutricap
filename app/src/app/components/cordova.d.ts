interface Navigator {
    notification: {
      alert: (message: string, alertCallback: () => void, title?: string, buttonName?: string) => void;
    };
    device: {
      capture: {
        captureVideo: (
          successCallback: (mediaFiles: MediaFile[]) => void,
          errorCallback: (error: CaptureError) => void,
          options?: CaptureVideoOptions
        ) => void;
      };
    };
  }
  
  interface MediaFile {
    // Add properties for MediaFile if needed
    name: string;
    fullPath: string;
    type: string;
    lastModifiedDate: Date;
    size: number;
  }
  
  interface CaptureError {
    code: number;
    message: string;
    
  }
  
  interface CaptureVideoOptions {
    limit?: number;
    duration?: number;
    quality?: number;
  }
  