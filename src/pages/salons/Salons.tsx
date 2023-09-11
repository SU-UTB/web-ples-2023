import { useEffect, useState } from 'react';
import '../../App.css';
import {
  LinkToMainPage,
  LinkWrapper,
  SalonsWrapper,
  FormWrapper,
  SalonsWrapperBg,
  FormCheckbox,
  SalonsConsent,
  FormSelect,
  RowWrapper,
  Label,
  Spacer,
  FormInput,
  FooterSU,
  ParagraphWrapper,
} from './Salons.styled';
import {
  ButtonSubmit,
  ReservationHeadline,
} from '../reservations/Reservations.styled';
import { useNavigate } from 'react-router-dom';
import Fold from '../../components/layout/Fold';
import axios from 'axios';
import {
  showAlreadyReservedError,
  showGdprModal,
  showSuccessReservation,
} from '../../sections/reservations/swalFunctions';
import { Oval } from 'react-loader-spinner';
import { api } from '../../api/api';

interface Maker {
  id: number;
  name: string;
}

interface MakerService {
  maker_id: number;
  service: string;
}

interface AllMakers {
  makers: Array<Maker>;
  availableTimes: Map<string, Array<number>>;
  makerServices: Array<MakerService>;
}

const initialAllMakers: AllMakers = {
  makers: new Array<Maker>(),
  availableTimes: new Map<string, Array<number>>(),
  makerServices: new Array<MakerService>(),
};

const Salons = () => {
  const navigate = useNavigate();
  const handleGoToMainpage = () => navigate('/');

  const [maker, setMaker] = useState(0);
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [allMakers, setAllMakers] = useState(initialAllMakers);
  const [availableTimes, setAvailableTimes] = useState(new Array<string>());
  const [availableServices, setAvailableServices] = useState(
    new Array<string>(),
  );

  useEffect(() => {
    getAllMakers();
  }, []);

  const getAllMakers = async () => {
    try {
      const response = await api.get('makers');
      setAllMakers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMaker(allMakers.makers[0]?.id ?? 0);
  }, [allMakers]);

  useEffect(() => {
    onChangeTimes();
    onChangeServices();
  }, [maker]);

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  useEffect(() => {
    setService(availableServices[0]);
  }, [availableServices]);

  const onChangeMaker = (e) => {
    const { name, value } = e.target;

    setMaker(value);
  };

  const onChangeTime = (e) => {
    const { name, value } = e.target;

    setTime(value);
  };
  const onChangeService = (e) => {
    const { name, value } = e.target;

    setService(value);
  };
  const onChangeName = (e) => {
    const { name, value } = e.target;

    setName(value);
  };
  const onChangePhone = (e) => {
    const { name, value } = e.target;

    setPhone(value);
  };
  const onChangeEmail = (e) => {
    const { name, value } = e.target;

    setEmail(value);
  };

  const onChangeConsent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setConsent(checked);
  };

  function onChangeTimes() {
    // I just love javascript, oh gawd this motherfookin cast shit...
    let availableMakerTimes = Array.from(
      new Map(Object.entries(allMakers.availableTimes)),
    )
      .map((entry) => {
        if (entry[1].includes(Number.parseInt(maker.toString()))) {
          return entry[0];
        }
      })
      .filter((t) => t !== undefined);
    setAvailableTimes(availableMakerTimes as Array<string>);
  }
  function onChangeServices() {
    let availableServices = allMakers.makerServices
      .filter((ms) => ms.maker_id === Number.parseInt(maker.toString()))
      .map((ms) => ms.service);

    setAvailableServices(availableServices as Array<string>);
  }

  const handleSubmitReservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createReservation();
  };

  const createReservation = () => {
    setIsLoading(true);
    //TODO validations
    axios({
      method: 'post',
      url: `https://rezervacesutb.wz.cz/api/makers`,
      headers: {
        'Content-Type': 'Application/json',
      },
      data: {
        maker: `${maker}`,
        time: `${time}`,
        service: `${service}`,
        name: `${name}`,
        phone: `${phone}`,
        email: `${email}`,
        consent: `${consent}`,
      },
    }).then(
      (response) => {
        showSuccessReservation();
        reloadData();
      },
      (error) => {
        if (error.response.status === 400) {
          showAlreadyReservedError(error.response.data.error);
        }
        setIsLoading(false);
      },
    );
  };

  const reloadData = () => {
    setAllMakers(initialAllMakers);
    setName('');
    setEmail('');
    setPhone('');
    setConsent(false);
    getAllMakers();
    setIsLoading(false);
  };

  const showGDPR = () => {
    showGdprModal();
  };

  return (
    <SalonsWrapperBg>
      <SalonsWrapper>
        <Fold />
        {
          <LinkWrapper>
            <LinkToMainPage onClick={handleGoToMainpage}>
              Zpět na hlavní stránku
            </LinkToMainPage>
          </LinkWrapper>
        }
        <Spacer />
        <ReservationHeadline>
          Reprezentační ples UTB - rezervace salonu
        </ReservationHeadline>
        <ParagraphWrapper>
          V den D se dámy mohou přijít zkrášlit šikovnými kadeřnicemi a
          kosmetičkami za symbolickou částku.
        </ParagraphWrapper>
        <Spacer />
        <>
          {isLoading ? (
            <>
              <Oval color="white" secondaryColor="lightblue" width="80%" />
              <FooterSU style={{ position: 'fixed' }}>
                Rezervační systém SU UTB
              </FooterSU>
            </>
          ) : (
            <>
              <FormWrapper onSubmit={handleSubmitReservation}>
                <RowWrapper>
                  <Label>Kadeřnice/kosmetička</Label>
                  <FormSelect
                    id="maker"
                    placeholder="Obsluha"
                    name="maker"
                    onChange={onChangeMaker}
                    value={maker}
                  >
                    {allMakers.makers.map((m) => (
                      <option value={m.id} key={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </FormSelect>
                </RowWrapper>

                <RowWrapper>
                  <Label>Čas rezervace</Label>
                  <FormSelect
                    id="time"
                    placeholder="Čas"
                    name="time"
                    onChange={onChangeTime}
                    value={time}
                  >
                    {availableTimes.map((t) => (
                      <option value={t} key={t}>
                        {
                          // :))))
                        }
                        {t.replace('00', ':00').replace('30', ':30')}
                      </option>
                    ))}
                  </FormSelect>
                </RowWrapper>

                <RowWrapper>
                  <Label>Služba </Label>
                  <FormSelect
                    id="service"
                    placeholder="Služna"
                    name="service"
                    onChange={onChangeService}
                    value={service}
                  >
                    {availableServices.map((s) => (
                      <option value={s} key={s}>
                        {s}
                      </option>
                    ))}
                  </FormSelect>
                </RowWrapper>

                <Spacer />

                <RowWrapper>
                  <Label>Jméno</Label>
                  <FormInput
                    type="text"
                    id="name"
                    placeholder="Jméno"
                    name="name"

                    onChange={onChangeName}
                    value={name}
                    required
                  />
                </RowWrapper>

                <RowWrapper>
                  <Label>Telefon</Label>
                  <FormInput
                    type="phone"
                    id="phone"
                    placeholder="Telefon"
                    name="phone"
                    onChange={onChangePhone}
                    value={phone}
                    required
                  />
                </RowWrapper>

                <RowWrapper>
                  <Label>Email</Label>
                  <FormInput
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={onChangeEmail}
                    value={email}
                    required
                  />
                </RowWrapper>
                <Spacer />

                <SalonsConsent onClick={showGDPR}>
                  Souhlasím se zpracováním osobních údajů
                </SalonsConsent>
                <FormCheckbox
                  type="checkbox"
                  id="consent"
                  name="consent"
                  onChange={onChangeConsent}
                  checked={consent}
                  required
                />
                <Spacer />

                <ButtonSubmit type="submit">Vytvořit rezervaci</ButtonSubmit>

              </FormWrapper>
              <FooterSU>Rezervační systém SU UTB</FooterSU>
            </>
          )}
        </>
      </SalonsWrapper>
    </SalonsWrapperBg>
  );
};

export default Salons;
