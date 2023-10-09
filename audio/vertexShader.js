export const vertexShaderScript = `#version 300 es
precision highp float;

#define TAU 6.28318530718
#define RIGHT_ANGLE 1.57079632679

uniform float sampleRate;

out float sound;

void main(void){
  float frame = float(gl_VertexID); // 頂点データのインデックスをフレーム数として使う。
  float time = frame / sampleRate; // 経過した秒数。

  float volume = 0.2;
  float frequency = 440.0; // 周波数。Hz（ヘルツ）で指定する。

  // その秒数における波長の進行度。
  // 最大値は frequency の値。
  float progress = frequency * time;

  // 正弦波。
  float baseSound = sin(TAU * progress);

  // 三角波。
  // float baseSound = (asin(sin(TAU * progress)) / RIGHT_ANGLE);

  // 矩形波。
  // float baseSound = sign(0.5 - fract(progress));

  // のこぎり波。
  // float baseSound = (1.0 - fract(progress) * 2.0);

  sound = baseSound * volume;
}
`;
