<template>
  <div  style="color: #fff;height: auto;">
    <div  class="my-div" style="overflow: auto;background-color: #2a2c3b;">

            <h1 class="my-heading" style="width:100%;text-align:center">基本描述</h1>
            <h3 style="color: #ee9900;">1.1、基本描述</h3>
            <p>FISCO BCOS是由国内企业主导研发、对外开源、安全可控的企业级金融联盟链底层平台，由金链盟开源工作组协作打造，并于2017年正式对外开源。</p>

            <p>社区以开源链接多方，截至2022年末，FISCO BCOS已支撑300余个产业数字化标杆应用，开源生态圈汇聚超4000家机构 、超90000名个人成员，
              以及38家认证合作企业、400余名核心贡献者。底层平台可用性经广泛应用实践检验，数百个应用项目基于FISCO BCOS底层平台研发，超300个已在
              生产环境中稳定运行，覆盖文化版权、司法服务、政务服务、物联网、金融、智慧社区等领域，共同推动最大最活跃国产开源联盟链生态圈的形成。</p>
            <h3 style="color: #ee9900;">1.2、开源许可证</h3>
            <p >开源许可证：FISCO BCOS 是基于开源许可证发布的软件，其核心代码遵循Apache License 2.0许可证。这意味着你可以免费使用、修改和分发
              软件，但需要遵守许可证的条款和条件。</p>
            <h3 style="color: #ee9900;">1.3、版权归属</h3>
            <p>FISCO BCOS 的版权归属于中国金融区块链联盟（FISCO-BCOS）及其贡献者。这意味着原始软件的所有权归开发团队所有，而非个人或其他实体。</p>
            <h3 style="color: #ee9900;">1.4、贡献者</h3>
            <p>FISCO BCOS 是一个社区驱动的开源项目，吸引了来自多个组织和个人的贡献者。每个贡献者在其提交的代码上可能都有相关的版权声明和许可证。</p>
            <h4>1.4.1 代码贡献</h4>
            <h4>1.4.2 工具贡献</h4>
            <h4>1.4.2 应用参考贡献</h4>
            <h4>1.4.2 布道贡献</h4>
            <p></p>
            <p class="indented"> ( 详细信息可见
              <a href="https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/community/contributor_list_new.html#id5">FISCO BCOS-贡献者</a>)</p>



    </div>
  </div>
</template>

<script>
export default {
  name: "basicInformation"
}
</script>

<style >
.my-heading {
  line-height: 1.5cm;
  font-size: 24px;
}
.scrollable-text {
  overflow: hidden; /* 隐藏超出部分 */
}

.scrollable-text p {
  animation: scroll 10s linear infinite; /* 使用名为 "scroll" 的动画 */
  white-space: nowrap; /* 确保文字不换行 */
}

@keyframes scroll {
  0% {
    transform: translateX(0); /* 初始位置 */
  }
  100% {
    transform: translateX(-100%); /* 滚动到最左侧 */
  }
}
.indented{
  margin-left: 70px;
}
.loading-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

.fade-in-out {
  animation: fadeAnim 2s ease-in-out forwards;
}

@keyframes fadeAnim {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.my-div {
  margin-top: 1.5cm;
  margin-bottom: 1.5cm;
  margin-left: 1.5cm;
  margin-right: 1.5cm;
}
</style>
