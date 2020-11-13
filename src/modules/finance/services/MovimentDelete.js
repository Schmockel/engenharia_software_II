class MovimentDelete {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(moviment_id) {
    await this.financeRepository.movimentRemove(moviment_id);
  }
}

module.exports = MovimentDelete;
