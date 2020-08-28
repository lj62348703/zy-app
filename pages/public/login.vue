<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="text" 
						v-model="mobile"
						placeholder="请输入手机号码"
						maxlength="11"
					/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="password" 
						placeholder="6-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="18"
						password 
						v-model="password"
					/>
				</view>
				<view class="input-item">
					<text class="tit">验证码</text>
					<input 
						type="text" 
						placeholder="请输入验证码"
						maxlength="4"
						v-model="imageCode"
					/>
					<image @click="getImage" :src="imgUrl"></image>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<view class="forget-section">
				忘记密码?
			</view>
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>
		
		<!-- 底部导航 -->
		<view style="height: 110px;"></view>
		<Tab></Tab>
	</view>
</template>

<script>
	//导入底部导航组件
	import Tab from '@/components/tab.vue'
	import {  
        mapMutations  
    } from 'vuex';
	
	export default{
		data(){
			return {
				mobile: '',
				password: '',
				logining: false,
				imgUrl: "",
				imageCode:"",
			}
		},
		onLoad(){
			this.imgUrl = this.basePath+'/image.action?t='+Math.random();
		},
		methods: {
			toRegist(){
				this.$api.msg('去注册');
			},
			async toLogin(){
				this.logining = true;
				uni.request({//加载文章
					url: this.basePath+'/login/'+this.mobile+'/'+this.password+'/'+this.imageCode,
					method: 'POST',
					withCredentials: true,
					success: res => {//请求成回调函数
						let result = res.data;
						if(result.code == 1){//成功
							uni.setStorageSync('tokenInfo', result.data.tokenInfo);
							uni.setStorageSync('userName', result.data.userName);
							uni.setStorageSync('userNike', result.data.userNike);
							uni.navigateBack();
						}else if(result.code < -7){
							uni.showToast({
								 title: '用户名密码错误',
								 duration: 1000,
								 icon:'loading'
							})
						}else if(result.code == -7){
							uni.showToast({
								 title: '验证码错误',
								 duration: 1000,
								 icon:'loading'
							})
						}else if(result.code < 0){
							uni.showToast({
								 title: '参数格式错误',
								 duration: 1000,
								 icon:'loading'
							})
						}else{
							uni.showToast({
								 title: '服务器错误',
								 duration: 1000,
								 icon:'loading'
							})
						}
						this.logining = false;
					},
				});
			},
			getImage(event){//刷新验证码
				uni.navigateTo({
					url: '/pages/public/login'
				})
			}
			
		},
		//导入插件组件
		components:{
		    Tab
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		position: relative;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
		image{
			width: 200upx;
			height: 80upx;
			position: absolute;
			left: 400upx;
			cursor: pointer;
		}
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
</style>
