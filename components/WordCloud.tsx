import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { motion } from "framer-motion"

const WordCloudChart = ({ wordData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!wordData || wordData.length === 0) return;

        let chart;
        if (chartRef.current) {
            chart = echarts.init(chartRef.current);
            const option = {
                series: [{
                    type: 'wordCloud',
                    shape: 'circle', // 可选形状: 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
                    sizeRange: [12, 60], // 字号范围
                    rotationRange: [-90, 90], // 旋转范围
                    rotationStep: 45, // 旋转步长
                    gridSize: 8, // 网格大小
                    textStyle: {
                        normal: {
                            color: function () {
                                // 随机颜色
                                return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
                            }
                        }
                    },
                    data: wordData.map(item => ({ name: item.name, value: item.value })),
                }],
            };
            chart.setOption(option);
            window.addEventListener('resize', () => chart.resize());
            return () => {
                chart.dispose();
                window.removeEventListener('resize', () => chart.resize());
            };
        }
    }, [wordData]);

    return (
        <motion.div ref={chartRef} className='w-[50vw] h-[80vh]' />
    );
};

export default WordCloudChart;