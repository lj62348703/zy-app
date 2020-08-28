<template>
	<view class="content">
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="cu-form-group">
				<view class="title">选择分类</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
		</view>
		<!--  视频推荐 -->
		<view class="video-section">
			<view 
				v-for="(item, index) in askList" :key="index"
				class="guess-item">
				<text class="price" :id="setId(item.ask_id,item.answer,item.ask_type)">{{item.ask_title}}</text>
				<!-- 单选 -->
				<radio-group v-if="item.ask_type == 1" @change="radioChange">
					<text v-if="item.ask_a!=null  && item.ask_a !=''" class="price3">
						<radio class='blue radio' value="a">A:{{item.ask_a}}</radio>
					</text>
					<text v-if="item.ask_b!=null && item.ask_b !=''" class="price3">
						<radio class='blue radio' value="b">B:{{item.ask_b}}</radio>
					</text>
					<text v-if="item.ask_c!=null  && item.ask_c !=''" class="price3">
						<radio class='blue radio' value="c">C:{{item.ask_c}}</radio>
					</text>
					<text v-if="item.ask_d!=null  && item.ask_d !=''" class="price3">
						<radio class='blue radio' value="d">D:{{item.ask_d}}</radio>
					</text>
					<text v-if="item.ask_e!=null  && item.ask_e !=''" class="price3">
						<radio class='blue radio' value="e">E:{{item.ask_e}}</radio>
					</text>
					<text v-if="item.ask_f!=null  && item.ask_f !=''" class="price3">
						<radio class='blue radio' value="f">F:{{item.ask_f}}</radio>
					</text>
					<text v-if="item.ask_g!=null  && item.ask_g !=''" class="price3">
						<radio class='blue radio' value="G">G:{{item.ask_g}}</radio>
					</text>
					<text v-if="item.ask_h!=null  && item.ask_h !=''" class="price3">
						<radio class='blue radio' value="h">H:{{item.ask_h}}</radio>
					</text>
				</radio-group>
				<!-- 多选 -->
				<checkbox-group v-if="item.ask_type == 2" @change="radioChange">
					<text v-if="item.ask_a!=null  && item.ask_a !=''" class="price3">
						<checkbox class="''" value="a">A:{{item.ask_a}}</checkbox>
					</text>
					<text v-if="item.ask_b!=null && item.ask_b !=''" class="price3">
						<checkbox class="''" value="b">B:{{item.ask_b}}</checkbox>
					</text>
					<text v-if="item.ask_c!=null  && item.ask_c !=''" class="price3">
						<checkbox  value="c">C:{{item.ask_c}}</checkbox>
					</text>
					<text v-if="item.ask_d!=null  && item.ask_d !=''" class="price3">
						<checkbox  value="d">D:{{item.ask_d}}</checkbox>
					</text>
					<text v-if="item.ask_e!=null  && item.ask_e !=''" class="price3">
						<checkbox  value="e">E:{{item.ask_e}}</checkbox>
					</text>
					<text v-if="item.ask_f!=null  && item.ask_f !=''" class="price3">
						<checkbox  value="f">F:{{item.ask_f}}</checkbox>
					</text>
					<text v-if="item.ask_g!=null  && item.ask_g !=''" class="price3">
						<checkbox  value="g">G:{{item.ask_g}}</checkbox>
					</text>
					<text v-if="item.ask_h!=null  && item.ask_h !=''" class="price3">
						<checkbox  value="h">H:{{item.ask_h}}</checkbox>
					</text>
				</checkbox-group>
				<!-- 判断题 -->
				<radio-group v-if="item.ask_type == 3" @change="radioChange">
					<radio class='blue radio' value="t">对</radio>
					<radio class='blue radio' value="f">错</radio>
				</radio-group>
				<!-- 填空题 -->
				<view class="uni-form-item uni-column"  v-if="item.ask_type == 4">
					<view class="title">输入框：</view>
					<input v-model="ans"  placeholder="请输入填空题答案多个答案用,逗号分开" name="input"></input>
				</view>
				
				<button @click="submitAns()" 
					class="cu-btn block bg-blue margin-tb-sm lg">提交答案</button>
				<transition name = "fade">
					<button v-show = "show && !islast" @click="showNext()"
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
				<text v-if="show" class="price2">{{item.answer}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				askList: [],
				page:1,
				show:false,//显示下一题
				typeid:1,//题目知识类型
				show2:false,//已经到达最后
				islast:false,//是否最后一题
				ans:'',//用户答案
				ask_id:1,
				ask_type:1,//题目类型  选择问答
				answer:'',//正确答案
				userid:'',
				username:'',
				userStatus:'0',
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
				multiIndex: [0, 0, 0],
				flist: [],
				slist: [],
				tlist: [],
			}
		},
		onLoad(options){
			this.typeid = options.typeid == null ? 1 : options.typeid;
			//远程调用ajax
			let list;
			uni.request({//加载一个题目
				url: this.basePath+'/showOneAsk.html?article_type_id='+
					this.typeid+'&ans_content='+this.ans,
				method: 'GET',
				success: res => {//请求成回调函数
					list = res.data.list;
					/*添加一级分类*/
					list.forEach(item=>{
						this.askList.push(item);
					}) 
				},
			});
			this.loadData();
		},
		onShow() {
			this.userStatus = uni.getStorageSync('userStatus');
			this.username = uni.getStorageSync('username');
			this.userid = uni.getStorageSync('userid');
			if(this.userStatus != '1'){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		},
		methods: {
			submitAns(){//提交答案
				if(this.ans == null ||this.ans == 0 || this.ans == ''){
					uni.showToast({
						 title: '答案不能为空',
						 duration: 1000,
						 icon:'loading'
					});
					return;
				}
				let tf = 'f';
				if(this.ask_type == 4){//填空题
					let answerArr = this.answer.split("/");
					answerArr.forEach(item=>{
						//用户答案 转小写  去空格
						let ans1 = this.ans.toLowerCase().replace(/\s+/g,"");
						//正确答案中的一项 转小写  去空格
						let item1 = item.toLowerCase().replace(/\s+/g,"");
						//如果用户答案包含正确答案中的某一项就算正确
						if( ans1.indexOf(item1) != -1 ){
							tf = 't';
						}
					});
				}else if(this.ask_type < 4 && this.answer!=null && this.answer.toLowerCase() == this.ans){//选择题和判断题
					tf = 't';
				}
				
				if(tf=='t'){
					uni.showToast({
						 title: '恭喜答对了',
						 duration: 1000,
						 icon:'success'
					});
				}
				
				uni.request({//加载一个题目
					url: this.basePath+'/submitAns?user_id='+this.userid+
					'&ans_content='+this.ans+'&ask_id='+this.ask_id+'&tf='+tf,
					method: 'GET',
					success: res => {//请求成回调函数
						this.show = true;//显示下一题按钮
					},
				});
			},
			showNext(){//显示下一题
				this.ans = '';
				this.show = false;
				this.page = this.page +1;
				//远程调用ajax
				let list;
				uni.request({//加载一个题目
					url: this.basePath+'/showOneAsk.html?article_type_id='+this.typeid+'&page='+this.page,
					method: 'GET',
					success: res => {//请求成回调函数
						list = res.data.list;
						/*添加一级分类*/
						list.forEach(item=>{
							this.askList.pop(0);
							this.askList.push(item);  
						}) 
						if(res.data.total <= this.page){
							this.islast = true;//最后一页隐藏下一题提示最后一题
							this.show2 = true;
						}
					},
				});
			},
			radioChange: function(evt) {//点击选项
				this.ans = evt.target.value;
			},
			setId(askid,answer,ask_type){
				this.ask_id = askid;
				this.answer = answer;
				this.ask_type = ask_type;
			},
			async loadData(){
				//远程调用ajax
				let list;
				await uni.request({//加载所有分类
					url: this.basePath+'/atc/show3.action',
					method: 'GET',
					success: res => {//请求成回调函数
						list = res.data;
						console.log(list)
						/*添加一级分类*/
						this.multiArray[0] = [];
						list.forEach(item=>{
							if(!item.article_type_upid || item.article_type_upid==0){
								this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
								this.multiArray[0].push(item.article_type_name);
							}
						}) 
						/*添加二级分类*/
						this.multiArray[1] = [];
						list.forEach(sitem=>{
							//遍历分类
							list.forEach(fitem=>{
								if(!fitem.article_type_upid || fitem.article_type_upid==0){
									//遍历一级分类
									//如果分类的article_type_upid 等于 一级分类的article_type_id就是二级分类
									if(sitem.article_type_upid == fitem.article_type_id){
										this.slist.push(sitem);
									}
								}
							});
							if(sitem.article_type_upid == this.flist[0].article_type_id){
								this.multiArray[1].push(sitem.article_type_name);
							}
						}) 
						/*添加三级分类*/
						this.multiArray[2] = [];
						list.forEach(titem=>{
							//遍历分类
							this.slist.forEach(sitem=>{
								//遍历二级分类
								//如果分类的article_type_upid 等于 一级分类的article_type_id就是二级分类
								if(titem.article_type_upid == sitem.article_type_id){
									this.tlist.push(titem);
								}
							});
							if(titem.article_type_upid == this.slist[0].article_type_id){
								this.multiArray[2].push(titem.article_type_name);
							}
						}) 
					},
				});
				
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {
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

<style lang='scss'>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
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
