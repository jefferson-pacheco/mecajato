# Generated by Django 4.2.1 on 2023-06-16 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('servicos', '0003_alter_servico_protocolo'),
    ]

    operations = [
        migrations.AddField(
            model_name='servico',
            name='identificador',
            field=models.CharField(blank=True, max_length=24, null=True),
        ),
        migrations.AlterField(
            model_name='categoriamanutencao',
            name='titulo',
            field=models.CharField(choices=[('TVM', 'Trocar vávula do motor'), ('TOTroca de óleo', 'Trocar Oleo'), ('B', 'Balanceamento'), ('AL', 'ALIAMENTO'), ('TCM', 'Troca da correia do motor')], max_length=32),
        ),
        migrations.AlterField(
            model_name='servico',
            name='titulo',
            field=models.CharField(max_length=30),
        ),
    ]
