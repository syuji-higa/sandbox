export const vertexShaderScript = `#version 300 es
precision highp float;

#define TAU 6.28318530718 // 2π
#define RIGHT_ANGLE 1.57079632679 // π/2

uniform float sampleRate;

out float sound;

void main(void){
  float frame = float(gl_VertexID); // 頂点データのインデックスをフレーム数として使う。
  float time = frame / sampleRate; // 経過した秒数。

  float volume = 0.2; // 音量。
  float frequency = 440.0; // 周波数。Hz（ヘルツ）で指定する。

  // その秒数における波長の進行度。
  // 最大値は frequency の値。
  float progress = frequency * time;

  // 正弦波。
  // f(x)=sin(2πx)
  // float baseSound = sin(TAU * progress);

  // 三角波。
  // f(x)=asin(sin(2πx))/0.5π
  // float baseSound = asin(sin(TAU * progress)) / RIGHT_ANGLE;

  // 矩形波（デューティ比：0.5）。
  // f(x)=sgn(0.5-fractionalPart(x))
  // float baseSound = sign(0.5 - fract(progress));

  // パルス波（デューティ比：0.1）。
  // f(x)=sgn(0.1-fractionalPart(x))
  float baseSound = sign(0.5 - fract(progress));

  // のこぎり波。
  // f(x)=1.0-(fractionalPart(x)*2.0)
  // float baseSound = 1.0 - (fract(progress) * 2.0);

  // 波の大きさを反映する。
  sound = baseSound * volume;
}
`;
