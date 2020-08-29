<template>
		<!-- 底部导航 -->
		<view class="tab">
			<view :class="active==0?'item active':'item'" @click="tab0()">
				<view>
					<view class="uni-icon uni-icon-home"></view>
				</view>
				<view>首页</view> 
			</view>
			<view :class="active==1?'item active':'item'" @click="tab1()">
				<view>
					<view class="uni-icon uni-icon-list"></view>
				</view>
				<view class="text">{{text1}}</view>
			</view>
			<view :class="active==2?'item-add active':'item-add'" @click="tab2()">
				<view>
					<view class="uni-icon uni-icon-plus-filled"></view>
				</view>
				<view class="text">{{text2}}</view>
			</view>
			<view :class="active==3?'item active':'item'" @click="tab3()">
				<view>
					<view class="uni-icon uni-icon-compose"></view>
				</view>
				<view class="text">{{text3}}</view>
			</view>
			<view :class="active==4?'item active':'item'" @click="tab4()">
				<view>
					<view class="uni-icon uni-icon-person"></view>
				</view>
				<view class="text">我的</view> 
			</view>
		</view>
</template>

<script>
	import App from '../App.vue'
	export default {

		data() {
			return {
				active:App.active,
				height:0,
				text1:App.text1,
				text2:App.text2,
				text3:App.text3
			};
		},
		methods: {
			tab0(){//首页
				App.active=0;
				if(App.appStat == 2){
					uni.reLaunch({
						url:"/pages/index/index2"
					})
				}else{
					uni.reLaunch({
						url:"/pages/index/index1"
					})
				}
			},
			tab1(){//分类 ，视频
				App.active=1;
				if(App.appStat == 2){
					uni.reLaunch({
						url:"/pages/category/category"
					})
				}else{
					uni.reLaunch({
						url:"/pages/discount/discount"
					})
				}
			},
			tab2(){//切换按钮
				App.active=2;
				if(App.appStat == 1){
					App.appStat = 2;
					App.text1 = "视频";
					App.text2 = "学习";
					App.text3 = "刷题";
					this.text1 = "视频";
					this.text2 = "学习";
					this.text3 = "刷题";
				}else{
					App.appStat = 1;
					App.text1 = "优惠券";
					App.text2 = "生活";
					App.text3 = "抽奖";
					this.text1 = "优惠券";
					this.text2 = "生活";
					this.text3 = "抽奖";
				}
			},
			tab3(){//0元购 ，刷题
				App.active=3;
				if(App.appStat == 2){
					uni.reLaunch({
						url:"/pages/answer/answer"
					})
				}else{
					uni.reLaunch({
						url:"/pages/gift/gift"
					})
				}
			},
			tab4(){//我的
				App.active=4;
				uni.reLaunch({
					url:"../user/user"
				}) 
			},

		},

		
	}
</script>

<style lang="scss">
	/* 底部导航开始 */
	@import "../static/css/icon.css";
	.swiper-item {
		display: flex;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: #00BFFF;
		justify-content: center;
		align-items: center;
		margin-top: 110px;
	}
	.uni-icon {
		margin-top: 0;
		color: #929292;
		font-size: 40px;
	}
	.tab {
		position: fixed;
		z-index: 999;
		height: 80px;
		width: 100%;
		bottom: 0;
		background-color: #F7F7F7;
		display: flex;
		border-top: #CCCCCC 2px solid;
	}
	.tab .item-add {
		width: 20%;
		color: #929292;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		position: relative;
		text-align: center;
	}
	.item-add .uni-icon {
		position: relative;
		color: #DF5000;
		border-radius: 50%;
		font-size: 40px;
		left: 0px;
		top: -10px;
		text-align: center;
		box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 1), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
	}
	.item-add .text {
		font-size: 16px;
		position: relative;
		top: 0px;
	}
	.tab .item {
		width: 20%;
		color: #929292;
		font-size: 16px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.active {
		/*20D785*/
		color: #DF5000 !important;
	}
	.active .uni-icon {
		color: #DF5000;
	}
	/* 底部导航结束 */

</style>
