export const checkDimensions = (value: any) => {
    if (value) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = function (value) {
          const img = new Image() as any;
          img.src = value?.target?.result;
          img.onload = function () {
            const width = this.width;
            const height = this.height;
            resolve({ width, height });
          };
        };
      });
    }
  };
  