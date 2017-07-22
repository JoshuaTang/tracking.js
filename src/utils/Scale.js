(function() {
  /**
   * Auto-scaling utility.
   * @static
   * @constructor
   */
  tracking.Scale = {};

  /**
   * Holds the scale of original size.
   * @type {number}
   * @default 1.0
   * @static
   */
  tracking.Scale.scaleFactor = 1.0;

  /**
   * Adjusts the scale of original size.
   * @param {number} width Original canvas's width.
   * @param {number} height Original canvas's height.
   * @static
   */
  tracking.Scale.adjustScale = function (width, height, threshold) {
    var ratio = 1 / (Math.sqrt(width * height / threshold));
    this.scaleFactor = this.normalizeScale(ratio);
  };

  /**
   * Normalizes the raw scale to avoid rounding issues.
   * @param {number} s Raw scale.
   * @returns {number} Normalized scale.
   * @static
   */
  tracking.Scale.normalizeScale = function (s) {
    if (s >= 1) {
      return 1;
    }

    return Math.round(s * 10) / 10;
  };

}());
