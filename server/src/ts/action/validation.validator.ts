/* eslint-disable */
// generated by typescript-json-validator
import Ajv from "ajv";
import { RegisterUser, CreateLobby, Action, CheckAlive } from "./validation";
import ajv0 from "ajv/lib/refs/json-schema-draft-06.json";

export const ajv = new Ajv({
  allErrors: false,
  coerceTypes: false,
  format: "full",
  nullable: true,
  unicode: true,
  uniqueItems: true,
  useDefaults: true
});

ajv.addMetaSchema(ajv0);

export { RegisterUser, CreateLobby, Action, CheckAlive };
export const Schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    Action: {
      anyOf: [
        {
          $ref: "#/definitions/SetPresence"
        },
        {
          $ref: "#/definitions/Judge"
        },
        {
          $ref: "#/definitions/Reveal"
        },
        {
          $ref: "#/definitions/EnforceTimeLimit"
        },
        {
          $ref: "#/definitions/Like"
        },
        {
          $ref: "#/definitions/Submit"
        },
        {
          $ref: "#/definitions/TakeBack"
        },
        {
          $ref: "#/definitions/Redraw"
        },
        {
          $ref: "#/definitions/ChangeDecks"
        },
        {
          $ref: "#/definitions/ChangeHouseRule"
        },
        {
          $ref: "#/definitions/ChangeTimeLimitForStage"
        },
        {
          $ref: "#/definitions/ChangeTimeLimitMode"
        },
        {
          $ref: "#/definitions/SetHandSize"
        },
        {
          $ref: "#/definitions/SetPassword"
        },
        {
          $ref: "#/definitions/SetPublic"
        },
        {
          $ref: "#/definitions/SetScoreLimit"
        },
        {
          $ref: "#/definitions/EndGame"
        },
        {
          $ref: "#/definitions/Kick"
        },
        {
          $ref: "#/definitions/SetPlayerAway"
        },
        {
          $ref: "#/definitions/SetPrivilege"
        },
        {
          $ref: "#/definitions/StartGame"
        },
        {
          $ref: "#/definitions/Authenticate"
        },
        {
          $ref: "#/definitions/Leave"
        }
      ]
    },
    Authenticate: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Authenticate with the game.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_14"
        },
        token: {
          $ref: "#/definitions/Token"
        }
      },
      required: ["action", "token"],
      type: "object"
    },
    Cardcast: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A source for Cardcast.",
      properties: {
        playCode: {
          $ref: "#/definitions/PlayCode"
        },
        source: {
          enum: ["Cardcast"],
          type: "string"
        }
      },
      required: ["playCode", "source"],
      type: "object"
    },
    Change: {
      anyOf: [
        {
          $ref: "#/definitions/ChangePackingHeat"
        },
        {
          $ref: "#/definitions/ChangeRando"
        },
        {
          $ref: "#/definitions/ChangeReboot"
        }
      ]
    },
    "ChangeBase.HouseRule": {
      $ref: "#/definitions/PackingHeat"
    },
    "ChangeBase.HouseRule_1": {
      $ref: "#/definitions/Public"
    },
    "ChangeBase.HouseRule_2": {
      $ref: "#/definitions/Reboot"
    },
    "ChangeBase.Name": {
      enum: ["PackingHeat"],
      type: "string"
    },
    "ChangeBase.Name_1": {
      enum: ["Rando"],
      type: "string"
    },
    "ChangeBase.Name_2": {
      enum: ["Reboot"],
      type: "string"
    },
    ChangeDecks: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Make a change to the configuration of decks for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_5"
        },
        change: {
          $ref: "#/definitions/PlayerDriven"
        },
        deck: {
          $ref: "#/definitions/External"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "change", "deck", "if"],
      type: "object"
    },
    ChangeHouseRule: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set the hand size for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_6"
        },
        change: {
          $ref: "#/definitions/Change"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "change", "if"],
      type: "object"
    },
    ChangePackingHeat: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeRando: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name_1"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule_1"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeReboot: {
      additionalProperties: false,
      defaultProperties: [],
      properties: {
        houseRule: {
          $ref: "#/definitions/ChangeBase.Name_2"
        },
        settings: {
          $ref: "#/definitions/ChangeBase.HouseRule_2"
        }
      },
      required: ["houseRule"],
      type: "object"
    },
    ChangeTimeLimitForStage: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Change the time limit for a given stage.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_7"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        stage: {
          $ref: "#/definitions/Stage"
        },
        timeLimit: {
          $ref: "#/definitions/TimeLimit"
        }
      },
      required: ["action", "if", "stage"],
      type: "object"
    },
    ChangeTimeLimitMode: {
      additionalProperties: false,
      defaultProperties: [],
      description:
        "Change the time limit mode, or disable the time limits completely.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_7"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        mode: {
          $ref: "#/definitions/TimeLimitMode"
        }
      },
      required: ["action", "if", "mode"],
      type: "object"
    },
    CheckAlive: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Previously obtained tokens to check the validity of.",
      properties: {
        tokens: {
          items: {
            type: "string"
          },
          type: "array"
        }
      },
      required: ["tokens"],
      type: "object"
    },
    CreateLobby: {
      additionalProperties: false,
      defaultProperties: [],
      description: "The details needed to create a new lobby.",
      properties: {
        name: {
          description:
            'The name of the lobby, if not given, will default to "Name\'s Game".',
          type: "string"
        },
        owner: {
          $ref: "#/definitions/RegisterUser",
          description: "The registration for the owner of the lobby."
        }
      },
      required: ["owner"],
      type: "object"
    },
    EndGame: {
      additionalProperties: false,
      defaultProperties: [],
      description: "End the current game.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_12"
        }
      },
      required: ["action"],
      type: "object"
    },
    EnforceTimeLimit: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player asks to enforce the soft time limit for the game.",
      properties: {
        action: {
          enum: ["EnforceTimeLimit"],
          type: "string"
        },
        round: {
          type: "string"
        },
        stage: {
          $ref: "#/definitions/Stage"
        }
      },
      required: ["action", "round", "stage"],
      type: "object"
    },
    External: {
      $ref: "#/definitions/Cardcast",
      description: "A source for Cardcast."
    },
    Id: {
      description: "A unique id for a play.",
      type: "string"
    },
    Judge: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A user declares the winning play for a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType"
        },
        winner: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "winner"],
      type: "object"
    },
    Kick: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player asks to leave the game.",
      properties: {
        action: {
          enum: ["Kick"],
          type: "string"
        },
        user: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "user"],
      type: "object"
    },
    Leave: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player asks to leave the game.",
      properties: {
        action: {
          enum: ["Leave"],
          type: "string"
        }
      },
      required: ["action"],
      type: "object"
    },
    Like: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_2"
        },
        play: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "play"],
      type: "object"
    },
    Name: {
      description: "The name the user goes by.",
      maxLength: 100,
      minLength: 1,
      type: "string"
    },
    NameType: {
      enum: ["Judge"],
      type: "string"
    },
    NameType_1: {
      enum: ["Reveal"],
      type: "string"
    },
    NameType_10: {
      enum: ["SetPublic"],
      type: "string"
    },
    NameType_11: {
      enum: ["SetScoreLimit"],
      type: "string"
    },
    NameType_12: {
      enum: ["EndGame"],
      type: "string"
    },
    NameType_13: {
      enum: ["StartGame"],
      type: "string"
    },
    NameType_14: {
      enum: ["Authenticate"],
      type: "string"
    },
    NameType_2: {
      enum: ["Like"],
      type: "string"
    },
    NameType_3: {
      enum: ["Submit"],
      type: "string"
    },
    NameType_4: {
      enum: ["TakeBack"],
      type: "string"
    },
    NameType_5: {
      enum: ["ChangeDecks"],
      type: "string"
    },
    NameType_6: {
      enum: ["ChangeHouseRule"],
      type: "string"
    },
    NameType_7: {
      enum: ["ChangeTimeLimit"],
      type: "string"
    },
    NameType_8: {
      enum: ["SetHandSize"],
      type: "string"
    },
    NameType_9: {
      enum: ["SetPassword"],
      type: "string"
    },
    PackingHeat: {
      additionalProperties: false,
      defaultProperties: [],
      description: 'Configuration for the "Packing Heat" house rule.',
      type: "object"
    },
    PlayCode: {
      description: "A Cardcast play code for a deck.",
      type: "string"
    },
    PlayerDriven: {
      enum: ["Add", "Remove"],
      type: "string"
    },
    Presence: {
      description:
        "If the player is active in the game or has been marked as away.",
      enum: ["Active", "Away"],
      type: "string"
    },
    Privilege: {
      description: "The level of privilege a user has.",
      enum: ["Privileged", "Unprivileged"],
      type: "string"
    },
    Public: {
      additionalProperties: false,
      defaultProperties: [],
      description: "The public view of the Rando house rule.",
      properties: {
        number: {
          description: "The number of AI players to add to the game.",
          maximum: 10,
          minimum: 1,
          type: "number"
        }
      },
      required: ["number"],
      type: "object"
    },
    Reboot: {
      additionalProperties: false,
      defaultProperties: [],
      description:
        'Configuration for the "Reboot the Universe" house rule.\nThis rule allows players to draw a new hand by sacrificing a given number\nof points.',
      properties: {
        cost: {
          description: "The cost to redrawing.",
          maximum: 50,
          minimum: 1,
          type: "number"
        }
      },
      required: ["cost"],
      type: "object"
    },
    Redraw: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          enum: ["Redraw"],
          type: "string"
        }
      },
      required: ["action"],
      type: "object"
    },
    RegisterUser: {
      additionalProperties: false,
      defaultProperties: [],
      description: "The details to register a new user for a lobby.",
      properties: {
        name: {
          $ref: "#/definitions/Name",
          description: "The name the user wishes to use."
        },
        password: {
          description:
            "The lobby password, if there is one, this must be given and correct.",
          type: "string"
        }
      },
      required: ["name"],
      type: "object"
    },
    Reveal: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A user judges the winning play for a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_1"
        },
        play: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "play"],
      type: "object"
    },
    SetHandSize: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set the hand size for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_8"
        },
        handSize: {
          description: "The number of cards in each player's hand.",
          minimum: 3,
          type: "number"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        }
      },
      required: ["action", "handSize", "if"],
      type: "object"
    },
    SetPassword: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set (or unset) the password for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_9"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        password: {
          maxLength: 100,
          minLength: 1,
          type: "string"
        }
      },
      required: ["action", "if"],
      type: "object"
    },
    SetPlayerAway: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A privileged user asks to set a given player as away.",
      properties: {
        action: {
          enum: ["SetPlayerAway"],
          type: "string"
        },
        player: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "player"],
      type: "object"
    },
    SetPresence: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player asks to set themself as away.",
      properties: {
        action: {
          enum: ["SetPresence"],
          type: "string"
        },
        presence: {
          $ref: "#/definitions/Presence"
        }
      },
      required: ["action", "presence"],
      type: "object"
    },
    SetPrivilege: {
      additionalProperties: false,
      defaultProperties: [],
      description:
        "A privileged user asks to change the privilege of another user.",
      properties: {
        action: {
          enum: ["SetPrivilege"],
          type: "string"
        },
        privilege: {
          $ref: "#/definitions/Privilege"
        },
        user: {
          $ref: "#/definitions/Id"
        }
      },
      required: ["action", "privilege", "user"],
      type: "object"
    },
    SetPublic: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Set (or unset) the password for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_10"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        public: {
          type: "boolean"
        }
      },
      required: ["action", "if", "public"],
      type: "object"
    },
    SetScoreLimit: {
      additionalProperties: false,
      defaultProperties: [],
      description: "(Un)Set the score limit for the lobby.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_11"
        },
        if: {
          description:
            "If the config version doesn't match this, the operation will be rejected.\nThis avoids users accidentally overwriting each other's changes.",
          type: "string"
        },
        scoreLimit: {
          description:
            "The score threshold for the game - when a player hits this they win.\nIf not set, then there is end - the game goes on infinitely.",
          minimum: 1,
          type: "number"
        }
      },
      required: ["action", "if"],
      type: "object"
    },
    Stage: {
      enum: ["Complete", "Judging", "Playing", "Revealing"],
      type: "string"
    },
    StartGame: {
      additionalProperties: false,
      defaultProperties: [],
      description: "Start a game in the lobby if possible.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_13"
        }
      },
      required: ["action"],
      type: "object"
    },
    Submit: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_3"
        },
        play: {
          items: {
            type: "string"
          },
          type: "array"
        }
      },
      required: ["action", "play"],
      type: "object"
    },
    TakeBack: {
      additionalProperties: false,
      defaultProperties: [],
      description: "A player plays a white card into a round.",
      properties: {
        action: {
          $ref: "#/definitions/NameType_4"
        }
      },
      required: ["action"],
      type: "object"
    },
    TimeLimit: {
      description: "The amount of time in seconds to limit to.",
      maximum: 900,
      minimum: 0,
      type: "number"
    },
    TimeLimitMode: {
      description:
        'Indicated what happens when the time limit runs out.\n"Hard": Non-ready players are automatically set to away.\n"Soft": Ready players are given the option to set non-ready players to away.',
      enum: ["Hard", "Soft"],
      type: "string"
    },
    Token: {
      description: "A token that contains the encoded claims of a user.",
      type: "string"
    }
  }
};
ajv.addSchema(Schema, "Schema");
export function validate(
  typeName: "RegisterUser"
): (value: unknown) => RegisterUser;
export function validate(
  typeName: "CreateLobby"
): (value: unknown) => CreateLobby;
export function validate(typeName: "Action"): (value: unknown) => Action;
export function validate(
  typeName: "CheckAlive"
): (value: unknown) => CheckAlive;
export function validate(typeName: string): (value: unknown) => any {
  const validator: any = ajv.getSchema(`Schema#/definitions/${typeName}`);
  return (value: unknown): any => {
    if (!validator) {
      throw new Error(
        `No validator defined for Schema#/definitions/${typeName}`
      );
    }

    const valid = validator(value);

    if (!valid) {
      throw new Error(
        "Invalid " +
          typeName +
          ": " +
          ajv.errorsText(
            validator.errors!.filter((e: any) => e.keyword !== "if"),
            { dataVar: typeName }
          )
      );
    }

    return value as any;
  };
}
