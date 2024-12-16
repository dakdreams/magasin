-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "article" TEXT NOT NULL,
    "marque" TEXT NOT NULL,
    "prix1" INTEGER NOT NULL,
    "prix2" INTEGER NOT NULL,
    "prix3" INTEGER NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);
