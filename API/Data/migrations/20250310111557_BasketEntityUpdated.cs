using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class BasketEntityUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Baskets",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "ClientSecret",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "Coupon_AmountOff",
                table: "Baskets",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Coupon_CouponId",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Coupon_Name",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Coupon_PercentOff",
                table: "Baskets",
                type: "TEXT",
                precision: 5,
                scale: 2,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Coupon_PromotionCode",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentIntentId",
                table: "Baskets",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientSecret",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "Coupon_AmountOff",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "Coupon_CouponId",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "Coupon_Name",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "Coupon_PercentOff",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "Coupon_PromotionCode",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "PaymentIntentId",
                table: "Baskets");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Baskets",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);
        }
    }
}
