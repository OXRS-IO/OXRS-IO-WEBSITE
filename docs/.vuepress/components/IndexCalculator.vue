<template>
	<p>Use the index calculator below by selecting the 'Port' and 'Channel' you intend to configure, the calculator will display the 'Index' required in your configuration.</p>
	<div class="container">
		<div class="sub-container">
			<label for="port" class="token punctuation">Port:</label>
			<select v-model="port" @change="onChange($event)">
				<option v-for="port in ports" :value="port.value">
					{{ port.text }}
				</option>
			</select>
		</div>
		<div class="sub-container">
			<label for="channel" class="token punctuation">Channel:</label>
			<select v-model="channel" @change="onChange($event)">
				<option v-for="channel in channels" :value="channel.value">
					{{ channel.text }}
				</option>
			</select>
		</div>
		<div class="sub-container">
			<label for="index" class="token punctuation">Index:</label>
			<p class="index-value token punctuation">{{ index }}</p>
		</div>
	</div>
</template>

<script>
export default {

	data() {
		return {
			port: "1",
			channel: "1",
			index: "1",
			ports: [
				{ text: 'Port 1', value: '1' },
				{ text: 'Port 2', value: '2' },
				{ text: 'Port 3', value: '3' },
				{ text: 'Port 4', value: '4' },
				{ text: 'Port 5', value: '5' },
				{ text: 'Port 6', value: '6' },
				{ text: 'Port 7', value: '7' },
				{ text: 'Port 8', value: '8' },
				{ text: 'Port 9', value: '9' },
				{ text: 'Port 10', value: '10' },
				{ text: 'Port 11', value: '11' },
				{ text: 'Port 12', value: '12' },
				{ text: 'Port 13', value: '13' },
				{ text: 'Port 14', value: '14' },
				{ text: 'Port 15', value: '15' },
				{ text: 'Port 16', value: '16' },
				{ text: 'Port 17', value: '17' },
				{ text: 'Port 18', value: '18' },
				{ text: 'Port 19', value: '19' },
				{ text: 'Port 20', value: '20' },
				{ text: 'Port 21', value: '21' },
				{ text: 'Port 22', value: '22' },
				{ text: 'Port 23', value: '23' },
				{ text: 'Port 24', value: '24' },
				{ text: 'Port 25', value: '25' },
				{ text: 'Port 26', value: '26' },
				{ text: 'Port 27', value: '27' },
				{ text: 'Port 28', value: '28' },
				{ text: 'Port 29', value: '29' },
				{ text: 'Port 30', value: '30' },
				{ text: 'Port 31', value: '31' },
				{ text: 'Port 32', value: '32' }

			],
			channels: [
				{ text: 'Channel 1', value: '1' },
				{ text: 'Channel 2', value: '2' },
				{ text: 'Channel 3', value: '3' },
				{ text: 'Channel 4', value: '4' }
			]
		}
	},
	methods: {
		onChange(event) {
			this.index = ((parseInt(this.port) - 1) * 4) + parseInt(this.channel)
		}
	}
}
</script>

<style scoped>
body {
	color: #e6e7e8!important;
}

.container {
	display: flex;
	flex-direction: row;
	height: auto;
	margin: 30px 0px 30px 0px;
	padding: 30px 0px 20px 0px;
	background-color: #282C34;
	border-radius: 5px;
}

.sub-container {
	margin-left: 25px;
}

.index-value {
	margin-top: 1px;
	font-size: 22px;
}

select {
	display: flex;
	flex-direction: col;
	width: 120px;
	margin-top: 10px;
	font-size: 16px;
}

label {
	margin-bottom: 20px;
}
</style>