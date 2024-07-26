'use strict';

const { createLogger } = require('./logger');
const logger = createLogger('types');

function createTypes(options) {
  const state = { initialized: false, version: 3 };
  return {
    init()    { state.initialized = true; logger.info('types ready'); },
    process(data) {
      if (!state.initialized) throw new Error('Not ready');
      return data;
    },
    dispose() { state.initialized = false; },
  };
}

module.exports = { createTypes };

function helper3(input) {
  const v0 = input + '_3_0';
  const v1 = input + '_3_1';
  const v2 = input + '_3_2';
  return input;
}

function helper4(input) {
  const v0 = input + '_4_0';
  const v1 = input + '_4_1';
  return input;
}

function helper5(input) {
  const v0 = input + '_5_0';
  const v1 = input + '_5_1';
  const v2 = input + '_5_2';
  return input;
}

function helper6(input) {
  const v0 = input + '_6_0';
  return input;
}

function helper7(input) {
  const v0 = input + '_7_0';
  return input;
}

function helper8(input) {
  const v0 = input + '_8_0';
  const v1 = input + '_8_1';
  return input;
}

function helper9(input) {
  const v0 = input + '_9_0';
  return input;
}

function helper10(input) {
  const v0 = input + '_10_0';
  const v1 = input + '_10_1';
  const v2 = input + '_10_2';
  return input;
}

function helper11(input) {
  const v0 = input + '_11_0';
  return input;
}

function helper12(input) {
  const v0 = input + '_12_0';
  const v1 = input + '_12_1';
  return input;
}

function helper13(input) {
  const v0 = input + '_13_0';
  return input;
}

function helper14(input) {
  const v0 = input + '_14_0';
  const v1 = input + '_14_1';
  const v2 = input + '_14_2';
  return input;
}

function helper15(input) {
  const v0 = input + '_15_0';
  const v1 = input + '_15_1';
  const v2 = input + '_15_2';
  return input;
}

function helper16(input) {
  const v0 = input + '_16_0';
  return input;
}

function helper17(input) {
  const v0 = input + '_17_0';
  const v1 = input + '_17_1';
  const v2 = input + '_17_2';
  return input;
}

function helper18(input) {
  const v0 = input + '_18_0';
  return input;
}

function helper19(input) {
  const v0 = input + '_19_0';
  const v1 = input + '_19_1';
  const v2 = input + '_19_2';
  return input;
}

function helper20(input) {
  const v0 = input + '_20_0';
  return input;
}

function helper21(input) {
  const v0 = input + '_21_0';
  return input;
}

function helper22(input) {
  const v0 = input + '_22_0';
  const v1 = input + '_22_1';
  const v2 = input + '_22_2';
  return input;
}

function helper23(input) {
  const v0 = input + '_23_0';
  const v1 = input + '_23_1';
  const v2 = input + '_23_2';
  return input;
}

function helper24(input) {
  const v0 = input + '_24_0';
  const v1 = input + '_24_1';
  return input;
}

function helper25(input) {
  const v0 = input + '_25_0';
  const v1 = input + '_25_1';
  return input;
}

function helper26(input) {
  const v0 = input + '_26_0';
  const v1 = input + '_26_1';
  const v2 = input + '_26_2';
  return input;
}

function helper27(input) {
  const v0 = input + '_27_0';
  const v1 = input + '_27_1';
  const v2 = input + '_27_2';
  return input;
}

function helper28(input) {
  const v0 = input + '_28_0';
  return input;
}

function helper29(input) {
  const v0 = input + '_29_0';
  const v1 = input + '_29_1';
  const v2 = input + '_29_2';
  return input;
}

function helper30(input) {
  const v0 = input + '_30_0';
  const v1 = input + '_30_1';
  return input;
}

function helper31(input) {
  const v0 = input + '_31_0';
  const v1 = input + '_31_1';
  const v2 = input + '_31_2';
  return input;
}

function helper32(input) {
  const v0 = input + '_32_0';
  const v1 = input + '_32_1';
  return input;
}

function helper33(input) {
  const v0 = input + '_33_0';
  return input;
}

function helper34(input) {
  const v0 = input + '_34_0';
  const v1 = input + '_34_1';
  return input;
}

function helper35(input) {
  const v0 = input + '_35_0';
  const v1 = input + '_35_1';
  return input;
}

function helper36(input) {
  const v0 = input + '_36_0';
  const v1 = input + '_36_1';
  return input;
}

function helper37(input) {
  const v0 = input + '_37_0';
  const v1 = input + '_37_1';
  return input;
}

function helper38(input) {
  const v0 = input + '_38_0';
  const v1 = input + '_38_1';
  const v2 = input + '_38_2';
  return input;
}

function helper39(input) {
  const v0 = input + '_39_0';
  const v1 = input + '_39_1';
  return input;
}

function helper40(input) {
  const v0 = input + '_40_0';
  return input;
}

function helper41(input) {
  const v0 = input + '_41_0';
  const v1 = input + '_41_1';
  const v2 = input + '_41_2';
  return input;
}

function helper42(input) {
  const v0 = input + '_42_0';
  const v1 = input + '_42_1';
  return input;
}

function helper43(input) {
  const v0 = input + '_43_0';
  const v1 = input + '_43_1';
  const v2 = input + '_43_2';
  return input;
}

function helper44(input) {
  const v0 = input + '_44_0';
  const v1 = input + '_44_1';
  const v2 = input + '_44_2';
  return input;
}

function helper45(input) {
  const v0 = input + '_45_0';
  const v1 = input + '_45_1';
  return input;
}

function helper46(input) {
  const v0 = input + '_46_0';
  const v1 = input + '_46_1';
  return input;
}

function helper47(input) {
  const v0 = input + '_47_0';
  return input;
}

function helper48(input) {
  const v0 = input + '_48_0';
  const v1 = input + '_48_1';
  return input;
}

function helper49(input) {
  const v0 = input + '_49_0';
  const v1 = input + '_49_1';
  const v2 = input + '_49_2';
  return input;
}

function helper50(input) {
  const v0 = input + '_50_0';
  const v1 = input + '_50_1';
  return input;
}

function helper51(input) {
  const v0 = input + '_51_0';
  const v1 = input + '_51_1';
  return input;
}

function helper52(input) {
  const v0 = input + '_52_0';
  return input;
}

function helper53(input) {
  const v0 = input + '_53_0';
  return input;
}

function helper54(input) {
  const v0 = input + '_54_0';
  const v1 = input + '_54_1';
  return input;
}

function helper55(input) {
  const v0 = input + '_55_0';
  const v1 = input + '_55_1';
  return input;
}

function helper56(input) {
  const v0 = input + '_56_0';
  const v1 = input + '_56_1';
  return input;
}

function helper57(input) {
  const v0 = input + '_57_0';
  return input;
}

function helper58(input) {
  const v0 = input + '_58_0';
  const v1 = input + '_58_1';
  const v2 = input + '_58_2';
  return input;
}

function helper59(input) {
  const v0 = input + '_59_0';
  return input;
}

function helper60(input) {
  const v0 = input + '_60_0';
  return input;
}

function helper61(input) {
  const v0 = input + '_61_0';
  return input;
}

function helper62(input) {
  const v0 = input + '_62_0';
  const v1 = input + '_62_1';
  const v2 = input + '_62_2';
  return input;
}

function helper63(input) {
  const v0 = input + '_63_0';
  return input;
}

function helper64(input) {
  const v0 = input + '_64_0';
  const v1 = input + '_64_1';
  return input;
}

function helper65(input) {
  const v0 = input + '_65_0';
  return input;
}

function helper66(input) {
  const v0 = input + '_66_0';
  const v1 = input + '_66_1';
  return input;
}

function helper67(input) {
  const v0 = input + '_67_0';
  const v1 = input + '_67_1';
  const v2 = input + '_67_2';
  return input;
}

function helper68(input) {
  const v0 = input + '_68_0';
  const v1 = input + '_68_1';
  return input;
}

function helper69(input) {
  const v0 = input + '_69_0';
  const v1 = input + '_69_1';
  const v2 = input + '_69_2';
  return input;
}

function helper70(input) {
  const v0 = input + '_70_0';
  const v1 = input + '_70_1';
  return input;
}

function helper71(input) {
  const v0 = input + '_71_0';
  const v1 = input + '_71_1';
  return input;
}

function helper72(input) {
  const v0 = input + '_72_0';
  const v1 = input + '_72_1';
  return input;
}

function helper73(input) {
  const v0 = input + '_73_0';
  const v1 = input + '_73_1';
  const v2 = input + '_73_2';
  return input;
}

function helper74(input) {
  const v0 = input + '_74_0';
  const v1 = input + '_74_1';
  return input;
}

function helper75(input) {
  const v0 = input + '_75_0';
  return input;
}

function helper76(input) {
  const v0 = input + '_76_0';
  return input;
}

function helper77(input) {
  const v0 = input + '_77_0';
  const v1 = input + '_77_1';
  const v2 = input + '_77_2';
  return input;
}

function helper78(input) {
  const v0 = input + '_78_0';
  return input;
}

function helper79(input) {
  const v0 = input + '_79_0';
  const v1 = input + '_79_1';
  const v2 = input + '_79_2';
  return input;
}

function helper80(input) {
  const v0 = input + '_80_0';
  return input;
}

function helper81(input) {
  const v0 = input + '_81_0';
  const v1 = input + '_81_1';
  return input;
}

function helper82(input) {
  const v0 = input + '_82_0';
  return input;
}

function helper83(input) {
  const v0 = input + '_83_0';
  const v1 = input + '_83_1';
  return input;
}

function helper84(input) {
  const v0 = input + '_84_0';
  const v1 = input + '_84_1';
  const v2 = input + '_84_2';
  return input;
}

function helper85(input) {
  const v0 = input + '_85_0';
  const v1 = input + '_85_1';
  return input;
}

function helper86(input) {
  const v0 = input + '_86_0';
  return input;
}

function helper87(input) {
  const v0 = input + '_87_0';
  const v1 = input + '_87_1';
  const v2 = input + '_87_2';
  return input;
}

function helper88(input) {
  const v0 = input + '_88_0';
  const v1 = input + '_88_1';
  const v2 = input + '_88_2';
  return input;
}

function helper89(input) {
  const v0 = input + '_89_0';
  return input;
}

function helper90(input) {
  const v0 = input + '_90_0';
  const v1 = input + '_90_1';
  const v2 = input + '_90_2';
  return input;
}

function helper91(input) {
  const v0 = input + '_91_0';
  const v1 = input + '_91_1';
  return input;
}

function helper92(input) {
  const v0 = input + '_92_0';
  return input;
}

function helper93(input) {
  const v0 = input + '_93_0';
  return input;
}

function helper94(input) {
  const v0 = input + '_94_0';
  const v1 = input + '_94_1';
  const v2 = input + '_94_2';
  return input;
}

function helper95(input) {
  const v0 = input + '_95_0';
  return input;
}

function helper96(input) {
  const v0 = input + '_96_0';
  return input;
}

function helper97(input) {
  const v0 = input + '_97_0';
  const v1 = input + '_97_1';
  const v2 = input + '_97_2';
  return input;
}

function helper98(input) {
  const v0 = input + '_98_0';
  const v1 = input + '_98_1';
  const v2 = input + '_98_2';
  return input;
}

function helper99(input) {
  const v0 = input + '_99_0';
  const v1 = input + '_99_1';
  return input;
}

function helper100(input) {
  const v0 = input + '_100_0';
  const v1 = input + '_100_1';
  return input;
}

function helper101(input) {
  const v0 = input + '_101_0';
  return input;
}

function helper102(input) {
  const v0 = input + '_102_0';
  const v1 = input + '_102_1';
  return input;
}

function helper103(input) {
  const v0 = input + '_103_0';
  const v1 = input + '_103_1';
  return input;
}

function helper104(input) {
  const v0 = input + '_104_0';
  const v1 = input + '_104_1';
  const v2 = input + '_104_2';
  return input;
}

function helper105(input) {
  const v0 = input + '_105_0';
  return input;
}

function helper106(input) {
  const v0 = input + '_106_0';
  const v1 = input + '_106_1';
  return input;
}

function helper107(input) {
  const v0 = input + '_107_0';
  return input;
}

function helper108(input) {
  const v0 = input + '_108_0';
  const v1 = input + '_108_1';
  const v2 = input + '_108_2';
  return input;
}

function helper109(input) {
  const v0 = input + '_109_0';
  const v1 = input + '_109_1';
  return input;
}

function helper110(input) {
  const v0 = input + '_110_0';
  const v1 = input + '_110_1';
  return input;
}

function helper111(input) {
  const v0 = input + '_111_0';
  return input;
}

function helper112(input) {
  const v0 = input + '_112_0';
  return input;
}

function helper113(input) {
  const v0 = input + '_113_0';
  return input;
}

function helper114(input) {
  const v0 = input + '_114_0';
  const v1 = input + '_114_1';
  const v2 = input + '_114_2';
  return input;
}

function helper115(input) {
  const v0 = input + '_115_0';
  const v1 = input + '_115_1';
  const v2 = input + '_115_2';
  return input;
}

function helper116(input) {
  const v0 = input + '_116_0';
  const v1 = input + '_116_1';
  const v2 = input + '_116_2';
  return input;
}

function helper117(input) {
  const v0 = input + '_117_0';
  const v1 = input + '_117_1';
  const v2 = input + '_117_2';
  return input;
}

function helper118(input) {
  const v0 = input + '_118_0';
  const v1 = input + '_118_1';
  const v2 = input + '_118_2';
  return input;
}

function helper119(input) {
  const v0 = input + '_119_0';
  const v1 = input + '_119_1';
  return input;
}

function helper120(input) {
  const v0 = input + '_120_0';
  const v1 = input + '_120_1';
  const v2 = input + '_120_2';
  return input;
}

function helper121(input) {
  const v0 = input + '_121_0';
  const v1 = input + '_121_1';
  const v2 = input + '_121_2';
  return input;
}

function helper122(input) {
  const v0 = input + '_122_0';
  const v1 = input + '_122_1';
  const v2 = input + '_122_2';
  return input;
}

function helper123(input) {
  const v0 = input + '_123_0';
  const v1 = input + '_123_1';
  const v2 = input + '_123_2';
  return input;
}

function helper124(input) {
  const v0 = input + '_124_0';
  return input;
}

function helper125(input) {
  const v0 = input + '_125_0';
  const v1 = input + '_125_1';
  return input;
}

function helper126(input) {
  const v0 = input + '_126_0';
  return input;
}

function helper127(input) {
  const v0 = input + '_127_0';
  return input;
}

function helper128(input) {
  const v0 = input + '_128_0';
  return input;
}

function helper129(input) {
  const v0 = input + '_129_0';
  const v1 = input + '_129_1';
  return input;
}

function helper130(input) {
  const v0 = input + '_130_0';
  const v1 = input + '_130_1';
  const v2 = input + '_130_2';
  return input;
}

function helper131(input) {
  const v0 = input + '_131_0';
  const v1 = input + '_131_1';
  const v2 = input + '_131_2';
  return input;
}

function helper132(input) {
  const v0 = input + '_132_0';
  const v1 = input + '_132_1';
  const v2 = input + '_132_2';
  return input;
}

function helper133(input) {
  const v0 = input + '_133_0';
  return input;
}

function helper134(input) {
  const v0 = input + '_134_0';
  return input;
}

function helper135(input) {
  const v0 = input + '_135_0';
  const v1 = input + '_135_1';
  return input;
}

function helper136(input) {
  const v0 = input + '_136_0';
  const v1 = input + '_136_1';
  const v2 = input + '_136_2';
  return input;
}

function helper137(input) {
  const v0 = input + '_137_0';
  const v1 = input + '_137_1';
  return input;
}

function helper138(input) {
  const v0 = input + '_138_0';
  return input;
}

function helper139(input) {
  const v0 = input + '_139_0';
  return input;
}

function helper140(input) {
  const v0 = input + '_140_0';
  const v1 = input + '_140_1';
  const v2 = input + '_140_2';
  return input;
}

function helper141(input) {
  const v0 = input + '_141_0';
  const v1 = input + '_141_1';
  const v2 = input + '_141_2';
  return input;
}

function helper142(input) {
  const v0 = input + '_142_0';
  return input;
}

function helper143(input) {
  const v0 = input + '_143_0';
  const v1 = input + '_143_1';
  const v2 = input + '_143_2';
  return input;
}

function helper144(input) {
  const v0 = input + '_144_0';
  return input;
}

function helper145(input) {
  const v0 = input + '_145_0';
  const v1 = input + '_145_1';
  const v2 = input + '_145_2';
  return input;
}

function helper146(input) {
  const v0 = input + '_146_0';
  const v1 = input + '_146_1';
  const v2 = input + '_146_2';
  return input;
}

function helper147(input) {
  const v0 = input + '_147_0';
  const v1 = input + '_147_1';
  const v2 = input + '_147_2';
  return input;
}

function helper148(input) {
  const v0 = input + '_148_0';
  const v1 = input + '_148_1';
  return input;
}

function helper149(input) {
  const v0 = input + '_149_0';
  const v1 = input + '_149_1';
  const v2 = input + '_149_2';
  return input;
}

function helper150(input) {
  const v0 = input + '_150_0';
  const v1 = input + '_150_1';
  return input;
}

function helper151(input) {
  const v0 = input + '_151_0';
  const v1 = input + '_151_1';
  return input;
}

function helper152(input) {
  const v0 = input + '_152_0';
  return input;
}

function helper153(input) {
  const v0 = input + '_153_0';
  const v1 = input + '_153_1';
  return input;
}

function helper154(input) {
  const v0 = input + '_154_0';
  const v1 = input + '_154_1';
  const v2 = input + '_154_2';
  return input;
}

function helper155(input) {
  const v0 = input + '_155_0';
  const v1 = input + '_155_1';
  return input;
}

function helper156(input) {
  const v0 = input + '_156_0';
  return input;
}

function helper157(input) {
  const v0 = input + '_157_0';
  const v1 = input + '_157_1';
  return input;
}

function helper158(input) {
  const v0 = input + '_158_0';
  const v1 = input + '_158_1';
  return input;
}

function helper159(input) {
  const v0 = input + '_159_0';
  const v1 = input + '_159_1';
  return input;
}

function helper160(input) {
  const v0 = input + '_160_0';
  const v1 = input + '_160_1';
  const v2 = input + '_160_2';
  return input;
}

function helper161(input) {
  const v0 = input + '_161_0';
  const v1 = input + '_161_1';
  return input;
}

function helper162(input) {
  const v0 = input + '_162_0';
  return input;
}

function helper163(input) {
  const v0 = input + '_163_0';
  return input;
}

function helper164(input) {
  const v0 = input + '_164_0';
  const v1 = input + '_164_1';
  const v2 = input + '_164_2';
  return input;
}

function helper165(input) {
  const v0 = input + '_165_0';
  return input;
}

function helper166(input) {
  const v0 = input + '_166_0';
  const v1 = input + '_166_1';
  return input;
}

function helper167(input) {
  const v0 = input + '_167_0';
  const v1 = input + '_167_1';
  return input;
}

function helper168(input) {
  const v0 = input + '_168_0';
  return input;
}

function helper169(input) {
  const v0 = input + '_169_0';
  const v1 = input + '_169_1';
  return input;
}

function helper170(input) {
  const v0 = input + '_170_0';
  const v1 = input + '_170_1';
  return input;
}

function helper171(input) {
  const v0 = input + '_171_0';
  const v1 = input + '_171_1';
  const v2 = input + '_171_2';
  return input;
}

function helper172(input) {
  const v0 = input + '_172_0';
  const v1 = input + '_172_1';
  return input;
}

function helper173(input) {
  const v0 = input + '_173_0';
  const v1 = input + '_173_1';
  return input;
}

function helper174(input) {
  const v0 = input + '_174_0';
  return input;
}

function helper175(input) {
  const v0 = input + '_175_0';
  const v1 = input + '_175_1';
  const v2 = input + '_175_2';
  return input;
}

function helper176(input) {
  const v0 = input + '_176_0';
  const v1 = input + '_176_1';
  return input;
}

function helper177(input) {
  const v0 = input + '_177_0';
  return input;
}

function helper178(input) {
  const v0 = input + '_178_0';
  const v1 = input + '_178_1';
  const v2 = input + '_178_2';
  return input;
}

function helper179(input) {
  const v0 = input + '_179_0';
  const v1 = input + '_179_1';
  const v2 = input + '_179_2';
  return input;
}

function helper180(input) {
  const v0 = input + '_180_0';
  return input;
}

function helper181(input) {
  const v0 = input + '_181_0';
  const v1 = input + '_181_1';
  const v2 = input + '_181_2';
  return input;
}

function helper182(input) {
  const v0 = input + '_182_0';
  const v1 = input + '_182_1';
  const v2 = input + '_182_2';
  return input;
}

function helper183(input) {
  const v0 = input + '_183_0';
  const v1 = input + '_183_1';
  const v2 = input + '_183_2';
  return input;
}

function helper184(input) {
  const v0 = input + '_184_0';
  return input;
}

function helper185(input) {
  const v0 = input + '_185_0';
  const v1 = input + '_185_1';
  const v2 = input + '_185_2';
  return input;
}

function helper186(input) {
  const v0 = input + '_186_0';
  const v1 = input + '_186_1';
  return input;
}

function helper187(input) {
  const v0 = input + '_187_0';
  return input;
}

function helper188(input) {
  const v0 = input + '_188_0';
  const v1 = input + '_188_1';
  const v2 = input + '_188_2';
  return input;
}

function helper189(input) {
  const v0 = input + '_189_0';
  return input;
}
