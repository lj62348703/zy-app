<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">找回/修改密码</view>
			<view class="welcome">
				修改密码
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="number" 
						v-model="mobile"
						placeholder="请输入手机号码"
						maxlength="11"
					/>
					<button @click="getCode">获取验证码</button>
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
					<text class="tit">确认密码</text>
					<input 
						type="password" 
						placeholder="6-18位不含特殊字符的数字、字母组合"
						placeholder-class="input-empty"
						maxlength="18"
						password 
						v-model="password2"
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
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">修改密码</button>
			<view class="forget-section"  @click="toForget">
				忘记密码?
			</view>
		</view>
		<view class="register-section">
			已经有账号?
			<text @click="toRegist">点击登陆</text>
		</view>
		
		<!-- 分割底部导航专用 -->
		<view style="width: 100px;height: 160px;"></view>
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
				password2: '',
				logining: false,
				imgUrl: "",
				imageCode:"",
				userNike:"",
			}
		},
		onLoad(){
			//this.imgUrl = this.basePath+'/image.action?t='+Math.random();
		},
		methods: {
			getCode(){
				uni.request({//加载文章
					url: this.basePath+'/sendCode?userTelephone='+this.mobile,
					method: 'POST',
					withCredentials: true,
					success: res => {//请求成回调函数
						let result = res.data;
						if(result.code == 1){//成功
							uni.showToast({
								 title: '验证码发送成功',
								 duration: 1000,
								 icon:'success'
							})
						}else if(result.code != 1){
							uni.showToast({
								 title: result.msg,
								 duration: 1000,
								 icon:'loading'
							})
							console.log(result.data)
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
			toForget(){
				uni.redirectTo({
					url: '/pages/public/forget'
				})
			},
			toRegist(){
				uni.redirectTo({
					url: '/pages/public/login'
				})
			},
			async toLogin(){
				this.logining = true;
				uni.request({//加载文章
					url: this.basePath+'/changePwd?userPwd='+this.password+'&userTelephone='+this.mobile+'&imageCode='+this.imageCode,
					method: 'POST',
					withCredentials: true,
					success: res => {//请求成回调函数
						let result = res.data;
						if(result.code == 1){//成功
							uni.showToast({
								 title: '修改密码成功',
								 duration: 1000,
								 icon:'success',
								 success:function(){
									 uni.redirectTo({
									 	url: '/pages/public/login'
									 })
								 }
							})
						}else if(result.code != 1){
							uni.showToast({
								 title: result.msg,
								 duration: 1000,
								 icon:'loading'
							})
							console.log(result.data)
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
		padding-top: 25px;
		position:relative;
		width: 100vw;
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
		button{
			width: 200upx;
			height: 70upx;
			font-size: 16px;
			position: absolute;
			left: 400upx;
			line-height: 70upx;
			border-radius: 20px;
			background: #4CD964;
			color: #fff;
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
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
</style>
