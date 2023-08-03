from django.db.models import TextChoices

class ChoicesCategoriaManutecao(TextChoices):
    TROCAR_VALVULA_MOTOR = "TVM", "Trocar vávula do motor"
    TROCAR_OLEO = "TO" "Troca de óleo"
    BALANCEAMENTO = "B", "Balanceamento"
    ALIAMENTO = "AL", "ALIAMENTO"
    TROCA_CORREIA_MOTOR = "TCM", "Troca da correia do motor"