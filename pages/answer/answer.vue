<template>
	<view class="content">
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<!-- 选择分类 -->
			<view class="cu-form-group">
				<view class="title">选择分类</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view><!-- 选择分类结束 -->
		</view>
		
		<!--  视频推荐 -->
		<view class="video-section">
			<view class="guess-item">
				<text class="price"  v-html="'我是一个单选题的标题，里面可能包含html代码'"></text>
				<!-- 单选 -->
				<radio-group  @change="">
					<text  class="price3">
						<radio class='blue radio'  value="a">A:选项A</radio>
					</text>
					<text class="price3">
						<radio class='blue radio'  value="b">B:选项B</radio>
					</text>
					<text  class="price3">
						<radio class='blue radio'  value="c">C:选项C</radio>
					</text>
					<text  class="price3">
						<radio class='blue radio'  value="d">D:选项D</radio>
					</text>
				</radio-group>
				
				<button @click="" 
					class="cu-btn block bg-blue margin-tb-sm lg">提交答案</button>
				<transition name = "fade">
					<button v-show = "show && !islast" @click=""
						class="cu-btn block bg-cyan margin-tb-sm lg">下一题</button>
				</transition>
				<transition name = "slide-fade">
					<button v-show = "show2"
						class="cu-btn block line-blue margin-tb-sm lg">已经是最后一题</button>
				</transition>
				<text v-if="show" class="price">答案：</text>
				<view class="image-wrapper">
					<video v-if="show && item.ask_url!=null" :src="item.ask_url" controls></video>
				</view>
				<text v-if="show" class="price2">正确答案：A</text>
			</view>
		</view>
		
		<!-- 底部导航 -->
		<view style="height: 110px;"></view>
		<Tab></Tab>
	</view>
</template>

<script>
	//导入底部导航组件
	import Tab from '@/components/tab.vue'
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
				show: false,
				show2:true,
				multiArray: [
					['java', '云计算'],
					['Java语法', 'Java面向对象', 'Java基础'],
					['条件', '循环']
				],
				multiIndex: [0, 0, 0],
			}
		},
		//导入插件组件
		components:{
		    Tab
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData(){
				//远程调用ajax
				let list;
				await uni.request({//加载所有分类
					url: this.basePath+'/atc/show3.action',
					method: 'GET',
					success: res => {//请求成回调函数
						list = res.data;
						
					},
				});
			},
			
			navToList(tid){
				uni.redirectTo({
					url: '/pages/detail/askDetail?article_type_id='+tid
				})
			},
			MultiChange(e) {//确定分类
				this.multiIndex = e.detail.value;
				alert("选择了："+this.multiIndex);
			},
			MultiColumnChange(e) {//修改分类
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				if(e.detail.column == 0){//选择第一分类
					data.multiArray[1] = [];
					//遍历分类
					this.slist.forEach(sitem=>{
						//遍历二级分类
						//如果分类的article_type_upid 等于 一级分类的article_type_id就是二级分类
						if(sitem.article_type_upid == this.flist[e.detail.value].article_type_id){
							data.multiArray[1].push(sitem.article_type_name);
						}
					});
				}else if(e.detail.column == 1){//选择第二分类s
					data.multiArray[2] = [];
					//遍历分类
					this.tlist.forEach(titem=>{
						//遍历二级分类
						//如果分类的article_type_upid 等于 一级分类的article_type_id就是二级分类
						if(titem.article_type_upid == this.slist[e.detail.value].article_type_id){
							data.multiArray[2].push(titem.article_type_name);
						}
					});
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},
			
		}
	}
</script>

<style lang="scss">
	.m-t{
		margin-top: 16upx;
	}
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.iconfont{
			font-size: $font-lg +20upx;
			color: $font-color-light;
		}
	}
	
	.cu-form-group {
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	}
	.cu-form-group .title {
		text-align: justify;
		padding-right: 30upx;
		font-size: 30upx;
		position: relative;
		height: 60upx;
		line-height: 60upx;
	}
	.cu-form-group picker {
		flex: 1;
		padding-right: 40upx;
		overflow: hidden;
		position: relative;
	}
	.cu-form-group picker .picker {
		line-height: 100upx;
		font-size: 28upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
		text-align: right;
	}
	
	.cu-form-group picker::after {
		font-family: cuIcon;
		display: block;
		content: ">";
		position: absolute;
		font-size: 34upx;
		color: #8799a3;
		line-height: 100upx;
		width: 60upx;
		text-align: center;
		top: 0;
		bottom: 0;
		right: -20upx;
		margin: auto;
	}
		
		/* 视频推荐 */
		.video-section{
			display:flex;
			flex-wrap:wrap;
			padding: 0 30upx;
			background: #fff;
			.guess-item{
				display:flex;
				flex-direction: column;
				width: 98%;
				padding-bottom: 40upx;
				&:nth-child(2n+1){
					margin-right: 4%;
				}
			}
			.image-wrapper{
				width: 100%;
				height: 330upx;
				border-radius: 3px;
				overflow: hidden;
				video{
					width: 100%;
					height: 100%;
					opacity: 1;
				}
			}
			.title{
				font-size: $font-base;
				color: $font-color-dark;
				line-height: 40upx;
			}
			.price{
				text-align: left;
				font-size: $font-lg;
				color: $uni-color-primary;
				line-height: 40upx;
				vertical-align: middle;
			}
			.price2{
				text-align: center;
				font-size: $font-lg;
				color: $uni-color-primary;
				line-height: 40upx;
				vertical-align: middle;
			}
		}
		
		radio-group{
			text{
				display: block;
			}
			
			.price3{
				text-align: left;
				font-size: $font-lg;
				line-height: 40upx;
				vertical-align: middle;
				margin-top: 30upx;
			}
		}
		checkbox-group{
			text{
				display: block;
			}
			
			.price3{
				text-align: left;
				line-height: 40upx;
				margin-top: 30upx;
			}
		}
</style>
