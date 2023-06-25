const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comentarjogo')
		.setDescription('Texto do Marcel')
        .addStringOption(option => 
            option.setName('gamenumber')
            .setDescription('Número do jogo para gerar o script')
            .setRequired(true)),

	async execute (interaction) {
        const gameNumber = interaction.options.getString('gamenumber');

		await interaction.reply(`Descrição do jogo #${gameNumber}`);
	},

	async exceptionHandling(interaction, error){

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
};