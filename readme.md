# Legal Notice

This project How Dark is an independent product published under the Shadowdark RPG Third-Party License and is not affiliated with
The Arcane Library, LLC. Shadowdark RPG © 2023 The Arcane Library, LLC. For more information see here:

https://www.thearcanelibrary.com/blogs/shadowdark-blog/faq-on-the-shadowdark-rpg-third-party-license

# Summary

This repository contains a combat simulator based on ShadowDark RPG rules. It is implemented as a small Java 21 project using Gradle.

# Assumptions & Key Points

1. No surprise (yet?)
2. All creatures in near distance
3. Mobs randomly choose a target; Players focus fire
4. Heal spells only go off if someone is hurt
5. If a creature can do one of many things, randomly choose
6. AOE spells randomly target a number of creatures (e.g. Burning Hands targets 1d4 enemies)
7. Dying, unconscious, paralyzed, fear, sleeping, and engulfed conditions are implemented
8. All simple weapons implemented
9. Several basic spells are provided (e.g. Magic Missile, Burning Hands, Sleep, Cure Wounds, Shield of Faith, Turn Undead)

# Project Structure

```
src/
├── main
│   ├── java
│   │   └── com/redshift/ShadowDarkCalculator
│   │       ├── actions/      # Weapons and spells
│   │       ├── conditions/   # Status effects
│   │       ├── creatures/    # Players and monsters
│   │       ├── dice/         # Dice helpers
│   │       ├── encounter/    # Combat simulator and initiative
│   │       ├── party/        # Party builders
│   │       └── targets/      # Target selection strategies
│   └── resources
│       ├── application.properties
│       └── logback.xml
└── test
    └── java/com/redshift/ShadowDarkCalculator
        └── encounter/CombatSimulatorTest.java
```

# Build and Testing

The project uses Gradle. Java 21 and Spring Boot are configured in `build.gradle`. Run the unit tests with:

```
./gradlew test
```

# Logging

Logging is provided via Logback. The `com.redshift` package logs at `INFO` level, and the root logger is set to `WARN`.

# Important Code Components

- **Entry point:** `HowDark.java` runs a batch of simulated fights using `CombatSimulator`.
- **Combat flow:** `CombatSimulator` coordinates turns and checks for a winner. Creatures inherit from `BaseCreature` which handles conditions and actions.
- **Actions:** Weapons and spells implement the `Action` interface. Conditions are processed each round to modify creature behavior.
- **Parties and target selection:** Party builders configure example characters. Target selectors (under `targets/`) determine how creatures choose allies and enemies.

# Tips for New Contributors

1. Explore `HowDark.java` and `CombatSimulator` to understand the main loop.
2. Review actions and conditions to see how attacks and spells work.
3. Add new monster or player classes under `creatures/` and extend party builders for larger encounters.
4. Custom target selectors can change combat dynamics.
5. Use the existing unit tests in `src/test/java` as a starting point for verifying new features.

